import axios from "axios";

const envAPI = import.meta.env.VITE_API;
const envApiKey = import.meta.env.VITE_KEY;

export const API = axios.create({
  baseURL: envAPI,
  params:{
    key:envApiKey,
  }
});
