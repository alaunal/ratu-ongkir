import React from "react";

import TabSearchBar from "@/components/TabSearchBar";
import SearchResult from "@/components/SearchResult";

const Landing: React.FC = () => {
  return (
    <div>
      <TabSearchBar />
      <SearchResult />
    </div>
  );
};

export default Landing;
