import { useQueryGeolocation } from "../../hooks/useQueryGeolocation";
import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { Container } from "./style";

export function Home() {
  const { latitude, longitude } = useQueryGeolocation();
  const { data } = useQueryWeatherForecastPage();

  // console.log(latitude, longitude);

  return (
    <Container>
      <h1>{latitude}</h1>
    </Container>
  );
}
