import { createContext, useState, ReactNode, useContext } from "react";

export type TDataCost = {
  name: string;
  code: string;
  service: string;
  description: string;
  currency: string;
  cost: number;
  etd: string;
};

export type TPayload = {
  origin: number;
  destination: number;
  weight: number;
  courier: string;
  price: string;
};

export type TPayloadTracking = {
  awb: string;
  courier: string;
};

export enum EsearchType {
  DOMESTIC = "domestic",
  INTERNATIONAL = "international",
  TRACKING = "tracking",
}

export interface SearchContextType {
  searchType: EsearchType;
  setSearchType: (value: EsearchType) => void;
  fetchDomestic: (payload: TPayload) => void;
  fetchInternational: (payload: TPayload) => void;
  fetchTracking: (payload: TPayloadTracking) => void;
}

const SearchContext = createContext<SearchContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [searchType, setSearchType] = useState<EsearchType>(
    EsearchType.DOMESTIC
  );

  const [dataDomestic, setDataDomestic] = useState<TDataCost[] | null>(null);

  const [dataInternational, setDataInternational] = useState<
    TDataCost[] | null
  >(null);

  const [dataTracking, setDataTracking] = useState<any | null>(null);

  const fetchDomestic = (payload: TPayload) => {};

  const fetchInternational = (payload: TPayload) => {};

  const fetchTracking = (payload: TPayloadTracking) => {};

  const value = {
    searchType,
    fetchDomestic,
    fetchInternational,
    setSearchType,
    fetchTracking,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
