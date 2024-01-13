import { useQueryGeolocation } from "../../hooks/useQueryGeolocation";
// import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { Container } from "./style";

export function Home() {
  const { data, error, isLoading } = useQueryGeolocation();
  // const { data } = useQueryWeatherForecastPage();

  console.log(data, error, isLoading);

  return <Container>{/* <h1>{latitude}</h1> */}</Container>;
}
