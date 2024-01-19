import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { Container } from "./style";
import refresh from "../../assets/refresh.svg";
import { Link, useParams } from "react-router-dom";
import { CardStatistics } from "../../components/CardStatistics";
import locationIcon from "../../assets/LocationWhite.png";
import wind from "../../assets/weatherwind.svg";
import moisture from "../../assets/weathermoisture.svg";
import rain from "../../assets/weatherrain.svg";

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

      {data && (
        <article>
          <section className="boxWeatherForecast">
            <div className="CardTemperature">
              <div className="boxLocation">
                <Link to={"/"}>
                  <img className="imgLocation" src={locationIcon} />
                </Link>

                <div className="location">
                  <span>{data?.location.name}-ce, Brazil</span>
                  <span>11/01/2024, 13:03</span>
                </div>
              </div>

              <div className="temperature">
                <div className="datas">
                  <strong>
                    18 <span>°C</span>
                  </strong>
                  <span>
                    22° <span>16°</span>
                  </span>
                </div>
              </div>

              <div className="boxStatistics">
                <CardStatistics
                  key={"Vento"}
                  img={wind}
                  name="Vento"
                  data={17}
                  type={"km/h"}
                />

                <CardStatistics
                  key={"Umidade"}
                  img={moisture}
                  name="Umidade"
                  data={31}
                  type={"%"}
                />

                <CardStatistics
                  key={"Chuva"}
                  img={rain}
                  name="Chuva"
                  data={10}
                  type={"%"}
                />
              </div>
            </div>

            {/* <div className="boxAirQuality">
              <h1>{data?.location.name} + aaaa</h1>
            </div> */}
          </section>
          {/* <section className="boxWeekWeather"></section> */}
        </article>
      )}
    </Container>
  );
}
