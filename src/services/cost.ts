import api from "./api";

export type EPayloadCost = {
  origin: string;
  destination: string;
  weight: number;
  courier: string;
  price: string;
};

export type EResponseDomesticCost = {
  meta: {
    message: string;
    code: number;
    status: string;
  };
  data: {
    name: string;
    code: string;
    service: string;
    description: string;
    cost: number;
    etd: string;
  }[];
};

export type EResponseInternationalCost = {
  meta: {
    message: string;
    code: number;
    status: string;
  };
  data: {
    name: string;
    code: string;
    service: string;
    description: string;
    currency: string;
    cost: number;
    etd: string;
  }[];
};

// Post domestic cost calculation
export const postCostDomestic = async (
  payload: EPayloadCost
): Promise<EResponseDomesticCost> => {
  try {
    const response = await api.post<EResponseDomesticCost>(
      "calculate/domestic-cost",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Post international cost calculation
export const postCostInternational = async (
  payload: EPayloadCost
): Promise<EResponseInternationalCost> => {
  try {
    const response = await api.post<EResponseInternationalCost>(
      "calculate/international-cost",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
