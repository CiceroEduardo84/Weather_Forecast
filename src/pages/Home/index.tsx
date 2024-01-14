import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { Container } from "./style";
import refresh from "../../assets/refresh.svg";

export function Home() {
  const location = undefined;
  const { data, isLoading, error } = useQueryWeatherForecastPage(location!);

  if (error) console.error(error);

  return (
    <Container>
      {isLoading && (
        <span className="feedbackLoading">
          <img src={refresh} alt="carregando..." />
        </span>
      )}

      {!isLoading && error && <span className="feedbackError">Error...</span>}

      <h1>{data?.location.name}</h1>
    </Container>
  );
}
