import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { Container } from "./style";
import refresh from "../../assets/refresh.svg";
import { Link, useParams } from "react-router-dom";
import { CardStatistics } from "../../components/CardStatistics";
import locationIcon from "../../assets/LocationWhite.png";
import wind from "../../assets/weatherwind.svg";
import moisture from "../../assets/weathermoisture.svg";
import rain from "../../assets/weatherrain.svg";
import leaf from "../../assets/leaf.svg";
import { useEffect, useRef } from "react";
import { CardPollutants } from "../../components/CardPollutants";

export function Home() {
  const { name } = useParams();
  const { data, isLoading, error } = useQueryWeatherForecastPage(name!);

  const divRef = useRef<HTMLDivElement>(null);

  if (error) console.error(error);

  useEffect(() => {
    if (divRef.current && !isLoading) {
      divRef.current.scrollTo({ left: 60 });
    }
  }, [isLoading, divRef, data]);

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
                  <span>
                    {data.location.name}-{data.location.region},
                    {data.location.country}
                  </span>
                  <span>{data.location.localtime}</span>
                </div>
              </div>

              <div className="temperature">
                <div className="datas">
                  <strong>
                    {data.current.temp_c} <span>°C</span>
                  </strong>

                  <span>
                    {data.forecast.forecastday[0].day.maxtemp_c}°
                    <span> {data.forecast.forecastday[0].day.mintemp_c}°</span>
                  </span>
                </div>
              </div>

              <div className="boxStatistics" ref={divRef}>
                <div className="statistics">
                  <CardStatistics
                    key={"Vento"}
                    img={wind}
                    name="Vento"
                    data={data.current.wind_kph}
                    type={"km/h"}
                  />

                  <CardStatistics
                    key={"Umidade"}
                    img={moisture}
                    name="Umidade"
                    data={data.current.humidity}
                    type={"%"}
                  />

                  <CardStatistics
                    key={"Chuva"}
                    img={rain}
                    name="Chuva"
                    data={data.current.precip_mm}
                    type={"mm"}
                  />
                </div>
              </div>
            </div>

            <div className="cardAirQuality">
              <div className="title">
                <img src={leaf} alt="folha de árvore" />
                <span>Qualidade do ar</span>
              </div>

              <div className="airQuality">
                <span>Boa</span>
                <strong>21</strong>
              </div>

              <div className="quality">
                <CardPollutants
                  key={"CO"}
                  data={data.current.air_quality.co}
                  name={"CO"}
                />

                <CardPollutants
                  key={"O3"}
                  data={data.current.air_quality.o3}
                  name={"O3"}
                />

                <CardPollutants
                  key={"NO2"}
                  data={data.current.air_quality.no2}
                  name={"NO2"}
                />

                <CardPollutants
                  key={"SO2"}
                  data={data.current.air_quality.so2}
                  name={"SO2"}
                />

                <CardPollutants
                  key={"PM10"}
                  data={data.current.air_quality.pm10}
                  name={"PM10"}
                />

                <CardPollutants
                  key={"PM2.5"}
                  data={data.current.air_quality.pm2_5}
                  name={"PM2.5"}
                />
              </div>
            </div>
          </section>
          {/* <section className="boxWeekWeather"></section> */}
        </article>
      )}
    </Container>
  );
}
