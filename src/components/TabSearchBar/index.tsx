import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Truck, Globe, Package } from "@phosphor-icons/react";

import CardDomestic from "./CardDomestic";
import CardInternational from "./CardInternational";
import CardTrackingPackage from "./CardTrackingPackage";

const TabSearchBar: React.FC = () => {
  return (
    <Tabs defaultValue="domestik">
      <TabsList>
        <TabsTrigger value="domestik">
          <Truck className="mr-1" size={18} /> Domestic
        </TabsTrigger>
        <TabsTrigger value="international">
          <Globe className="mr-1" size={18} /> International
        </TabsTrigger>
        <TabsTrigger value="tracking-package">
          <Package className="mr-1" size={18} /> Tracking Package
        </TabsTrigger>
      </TabsList>
      <TabsContent value="domestik">
        <CardDomestic />
      </TabsContent>
      <TabsContent value="international">
        <CardInternational />
      </TabsContent>
      <TabsContent value="tracking-package">
        <CardTrackingPackage />
      </TabsContent>
    </Tabs>
  );
};

export default TabSearchBar;
