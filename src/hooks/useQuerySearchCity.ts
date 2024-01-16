import { useQuery } from "@tanstack/react-query";
import { API_SEARCH } from "../config/apiSearch";
import { SearchCity } from "../@types/search";
import { useState } from "react";

async function getSearchCity(city: string) {
  if (city) {
    const { data } = await API_SEARCH.get(`&q=${city}`);
    return data as SearchCity[];
  } else {
    return [] as SearchCity[];
  }
}

export function useQuerySearchCity() {
  const [city, setCity] = useState("");

  const query = useQuery({
    queryKey: ["getSearchCity", city],
    queryFn: () => getSearchCity(city),
  });

  return {
    ...query,
    setCity,
  };
}
