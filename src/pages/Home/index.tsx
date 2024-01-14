import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { Container } from "./style";

export function Home() {
  const location = undefined;
  const { data, isLoading, error } = useQueryWeatherForecastPage(location!);

  console.log(data);
  if (error) console.error(error);

  return (
    <Container>
      <h1>{data?.location.name}</h1>
    </Container>
  );
}
