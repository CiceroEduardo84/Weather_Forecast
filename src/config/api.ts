import axios from "axios";

const envAPI = import.meta.env.VITE_API;
const envApiKey = import.meta.env.VITE_KEY;

export const instance = axios.create({
  baseURL: envAPI,
});

instance.defaults.headers.common["Authorization"] = envApiKey;
