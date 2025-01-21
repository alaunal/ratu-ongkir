import React, { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "lodash";
import { Input } from "@/components/ui/input";

import {
  fetchDomesticDestination,
  fetchInternationalDestination,
  EResponseDomesticDestination,
  EResponseInternationalDestination,
} from "@/services";

interface Item {
  label: string;
  value: string;
}

interface SearchInputLocationProps {
  onSelect: (selected: Item | null) => void;
  placeholder?: string;
  type?: "domestic" | "international";
}

const SearchInputLocation: React.FC<SearchInputLocationProps> = ({
  onSelect,
  placeholder = "Search...",
  type = "domestic",
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchDestinations = useCallback(
    debounce(async (searchTerm: string) => {
      if (!searchTerm.trim()) {
        setItems([]);
        return;
      }

      const params = {
        search: searchTerm,
        limit: 20,
      };

      try {
        const results =
          type === "domestic"
            ? await fetchDomesticDestination(params)
            : await fetchInternationalDestination(params);

        const resultItems =
          type === "domestic"
            ? (results as EResponseDomesticDestination).data.map((item) => ({
                label: `${item.subdistrict_name}, ${item.city_name}, ${item.province_name}`,
                value: item.zip_code,
              }))
            : (results as EResponseInternationalDestination).data.map(
                (item) => ({
                  label: item.country_name,
                  value: item.country_id,
                })
              );

        setItems(resultItems);
        setIsOpen(true);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    }, 350),
    [type]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    fetchDestinations(value);
  };

  const handleSelect = (item: Item) => {
    setQuery(item.label);
    setIsOpen(false);
    onSelect(item);
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
      fetchDestinations.cancel(); // Cancel any pending debounce calls on unmount
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <Input
        value={query}
        onChange={handleChange}
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

export default SearchInputLocation;
