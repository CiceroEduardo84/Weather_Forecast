import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { Container } from "./style";
import refresh from "../../assets/refresh.svg";
import { useParams } from "react-router-dom";

export function Home() {
  const { name } = useParams();
  const { data, isLoading, error } = useQueryWeatherForecastPage(name!);

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
