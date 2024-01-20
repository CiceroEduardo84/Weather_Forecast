import { useQuery } from "@tanstack/react-query";
import { API } from "../config/api";
import { WeatherData } from "../@types/weatherForecast";

export function useQueryWeatherForecastPage(location: string | number) {
  // API Request
  async function getWeatherForecast(location: string | number = "auto:ip") {
    const { data } = await API.get(
      `&q=${location}&days=7&aqi=yes&alerts=no&lang=pt`
    );
    return data as WeatherData;
  }

  const query = useQuery({
    queryKey: [`getWeatherForecast${location}`, location],
    queryFn: () => getWeatherForecast(location),
  });

  return query;
}
