import axios from "axios";

const envAPISearch = import.meta.env.VITE_API_SEARCH;
const envApiKey = import.meta.env.VITE_KEY;

export const API_SEARCH = axios.create({
  baseURL: envAPISearch,
  params: {
    key: envApiKey,
  },
});
