import { useQueryGeolocation } from "../../hooks/useQueryGeolocation";
// import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { Container } from "./style";

export function Home() {
  const {data} = useQueryGeolocation();
  // const { data } = useQueryWeatherForecastPage();

  console.log(data);

  return <Container>{/* <h1>{latitude}</h1> */}</Container>;
}
