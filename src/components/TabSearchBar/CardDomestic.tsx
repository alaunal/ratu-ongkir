import { FC, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import SearchInputLocation from "@/components/SearchInputLocation";

import { MagnifyingGlass } from "@phosphor-icons/react";

import { domestic } from "@/constants";

const CardDomestic: React.FC = () => {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Domestic</CardTitle>
        <CardDescription>
          Find out the shipping costs for your domestic package
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 w-full">
          <div className="flex-1">
            <SearchInputLocation
              placeholder="City of origin of shipment"
              onSelect={(data) => setOrigin(data ? data?.value : "")}
            />
          </div>
          <div className="flex-1">
            <SearchInputLocation
              placeholder="Delivery destination city"
              onSelect={(data) => setDestination(data ? data?.value : "")}
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Weight by gram"
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
          <div>
            <Button>
              Find <MagnifyingGlass />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="pt-4 w-full">
          <p className="font-bold mb-4 text-center text">Expedition</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {domestic.map((item, index) => (
              <img
                key={index}
                src={item.logo}
                alt={item.name}
                className="inline-block h-6 w-auto"
              />
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardDomestic;
