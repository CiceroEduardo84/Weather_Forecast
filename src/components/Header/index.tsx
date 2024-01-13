import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";

export function Header() {
  const location = undefined;
  const { data } = useQueryWeatherForecastPage(location!);

  console.log(data);
  return <h1>Header</h1>;
}
