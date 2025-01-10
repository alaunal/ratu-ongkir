import api from "./api";

export type EParamsDestination = {
  search: string;
  limit?: number;
  offset?: number;
};

export type EResponseDomesticDestination = {
  meta: {
    message: string;
    code: number;
    status: string;
  };
  data: {
    id: number;
    label: string;
    subdistrict_name: string;
    district_name: string;
    city_name: string;
    province_name: string;
    zip_code: string;
  }[];
};

export type EResponseInternationalDestination = {
  meta: {
    message: string;
    code: number;
    status: string;
  };
  data: {
    country_id: string;
    country_name: string;
  }[];
};

// -- Fetch Domestic Destinations
export const fetchDomesticDestination = async (
  params: EParamsDestination
): Promise<EResponseDomesticDestination> => {
  try {
    const response = await api.get<EResponseDomesticDestination>(
      "destination/domestic-destination",
      {
        params,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// -- Fetch International Destinations
export const fetchInternationalDestination = async (
  params: EParamsDestination
): Promise<EResponseInternationalDestination> => {
  try {
    const response = await api.get<EResponseInternationalDestination>(
      "destination/international-destination",
      {
        params,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
