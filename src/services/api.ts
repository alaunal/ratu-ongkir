import axios, { AxiosInstance } from "axios";

const API_KEY = import.meta.env.VITE_ONGKIR_API_KEY || "";
const BASE_URL_API =
  import.meta.env.VITE_BASE_URL_API || "https://rajaongkir.komerce.id/api/v1";

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    key: API_KEY,
  },
});


// Example: POST Request
export const postData = async <T, R>(endpoint: string, data: T): Promise<R> => {
  try {
    const response = await axiosInstance.post<R>(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default axiosInstance;
