import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
              placeholder="Please enter receipt code"
              className="w-full"
            />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Expedition" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Expedition:</SelectLabel>
                  {tracking.map((item, index) => (
                    <SelectItem key={index} value={item.code}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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
