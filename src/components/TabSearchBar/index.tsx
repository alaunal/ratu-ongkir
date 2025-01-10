import React, { Suspense } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Truck, Globe, Package } from "@phosphor-icons/react";

// Dynamic imports
const CardDomestic = React.lazy(() => import("./CardDomestic"));
const CardInternational = React.lazy(() => import("./CardInternational"));
const CardTrackingPackage = React.lazy(() => import("./CardTrackingPackage"));

const TabSearchBar: React.FC = () => {
  return (
    <Tabs defaultValue="domestik">
      <TabsList className="mb-2">
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
        <Suspense fallback={<div>Loading Domestic...</div>}>
          <CardDomestic />
        </Suspense>
      </TabsContent>
      <TabsContent value="international">
        <Suspense fallback={<div>Loading International...</div>}>
          <CardInternational />
        </Suspense>
      </TabsContent>
      <TabsContent value="tracking-package">
        <Suspense fallback={<div>Loading Tracking Package...</div>}>
          <CardTrackingPackage />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default TabSearchBar;
