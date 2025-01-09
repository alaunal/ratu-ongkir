import React from "react";

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

import { MagnifyingGlass } from "@phosphor-icons/react";

import { tracking } from "@/constants";

const CardTrackingPackage: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tracking Package</CardTitle>
        <CardDescription>
          Find out the shipping costs for your international package
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 w-full">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="City of origin of shipment"
              className="w-full"
            />
          </div>
          <div>
            <Input type="number" placeholder="Weight by gram" />
          </div>
          <div>
            <Button>
              Find <MagnifyingGlass />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="pt-4">
          <p className="font-bold mb-4 text-center text">Expedition</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {tracking.map((item, index) => (
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

export default CardTrackingPackage;
