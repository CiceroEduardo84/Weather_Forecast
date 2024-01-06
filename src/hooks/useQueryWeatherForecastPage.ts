import { useQuery } from "@tanstack/react-query";
import { API } from "../config/api";

export function useQueryWeatherForecastPage() {
  // API Request
  async function getWeatherForecast() {
    const { data } = await API.get("&q=London");

    return data;
  }

  const query = useQuery({
    queryKey: ["getWeatherForecast"],
    queryFn: getWeatherForecast,
  });

  return { ...query };
}
