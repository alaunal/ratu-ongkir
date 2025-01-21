import axios, { AxiosInstance } from "axios";

const API_KEY = import.meta.env.VITE_ONGKIR_API_KEY || "";
const BASE_URL_API =
  import.meta.env.VITE_BASE_URL_API || "https://rajaongkir.komerce.id/api/v1";

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    "key": API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*"; // Add CORS header
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
