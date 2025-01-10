import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

interface Item {
  label: string;
  value: string;
}

interface InputAutocompleteProps {
  items?: string[] | Item[];
  onSelect: (selected: string | Item | null) => void;
  placeholder?: string;
}

const InputAutocomplete: React.FC<InputAutocompleteProps> = ({
  items = [],
  onSelect,
  placeholder = "Search...",
}) => {
  const [query, setQuery] = useState<string>(""); // Input value
//   const [filteredItems, setFilteredItems] = useState<(string | Item)[]>([]); // Filtered dropdown items
  const [isOpen, setIsOpen] = useState<boolean>(false); // Dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for outside click handling

//   useEffect(() => {
//     // Filter items based on query
//     if (query.trim() === "") {
//       setFilteredItems([]);
//       setIsOpen(false);
//       return;
//     }

//     const filtered =
//     typeof items[0] === "string"
//       ? (items as string[]).filter((item) =>
//           item.toLowerCase().includes(query.toLowerCase())
//         )
//       : (items as Item[]).filter((item) =>
//           item.label.toLowerCase().includes(query.toLowerCase())
//         );
//     setFilteredItems(filtered);
//     setIsOpen(filtered.length > 0);
//   }, [query, items]);

  const handleSelect = (item: string | Item) => {
    const selectedValue = typeof item === "string" ? item : item.label;
    setQuery(selectedValue);
    setIsOpen(false);
    onSelect(selectedValue);
  };

  const handleFallback = () => {
    const isValidSelection =
      typeof items[0] === "string"
        ? (items as string[]).includes(query)
        : (items as Item[]).some((item) => item.label === query);

    if (!isValidSelection) {
      onSelect(null); 
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={handleFallback}
        placeholder={placeholder}
        className="w-full"
      />
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-2 max-h-48 overflow-y-auto">
          {items.map((item, index) => {
            const label = typeof item === "string" ? item : item.label;
            return (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default InputAutocomplete;
