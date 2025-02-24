import axios from "axios";

const appEnv = import.meta.env.APP_ENV;

const api = axios.create({
  baseURL: appEnv === "PROD" ? import.meta.env.VITE_API_PROD_URL : import.meta.env.VITE_API_DEV_URL,
  withCredentials: true,
});

export default api;
