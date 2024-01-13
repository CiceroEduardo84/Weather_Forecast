import { useQuery } from "@tanstack/react-query";
import { API } from "../config/api";
interface WeatherData {
  // Defina a estrutura dos dados retornados pela API de previsão do tempo
  // Aqui, você deve adaptar de acordo com a resposta real da API
  // Por exemplo, se a resposta contiver uma propriedade 'temperature', você pode fazer algo como:
  // temperature: number;
  // Certifique-se de alinhar isso com a resposta real da API.
}

export function useQueryWeatherForecastPage(location: string | number) {
  // API Request
  async function getWeatherForecast(location: string | number = "auto:ip") {
    const { data } = await API.get(`&q=${location}&lang=pt`);
    return data; // Certifique-se de ajustar isso de acordo com a resposta real da API
  }

  const query = useQuery({
    queryKey: [`getWeatherForecast${location}`, location],
    queryFn: () => getWeatherForecast(location),
  });

  return query;
}
