import locationIcon from "../../assets/LocationWhite.png";
import moisture from "../../assets/weathermoisture.svg";
import wind from "../../assets/weatherwind.svg";
import rain from "../../assets/weatherrain.svg";
import clouds from "../../assets/twoClouds.svg";
import refresh from "../../assets/refresh.svg";
import leaf from "../../assets/leaf.svg";

import { useQueryWeatherForecastPage } from "../../hooks/useQueryWeatherForecastPage";
import { CardStatistics } from "../../components/CardStatistics";
import { CardPollutants } from "../../components/CardPollutants";
import { CardDays } from "../../components/CardDays";
import { Container } from "./style";

import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

export function Home() {
  const { name } = useParams();
  const { data, isLoading, error } = useQueryWeatherForecastPage(name!);
  const divRef = useRef<HTMLDivElement>(null);

  if (error) console.error(error);

  const localData = (data: string) => {
    const localDate = new Date(data);

    return localDate.toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const airQuality = (data: number) => {
    const qualityMap: { [key: number]: string } = {
      1: "Bom",
      2: "Moderado",
      3: "Insalubre p/ grupos sensíveis",
      4: "Insalubre",
      5: "Muito Insalubre",
      6: "Perigoso",
    };

    return qualityMap[data] || "";
  };

  useEffect(() => {
    if (divRef.current && !isLoading) {
      divRef.current.scrollTo({ left: 50 });
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
            <img
              className="twoClouds"
              src={clouds}
              alt="duas nuvens uma sobreposta a outra"
            />

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
                  <span>{localData(data.location.localtime)}</span>
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
                <span>
                  {airQuality(data.current.air_quality["gb-defra-index"])}
                </span>
                
                <strong>{data.current.air_quality["gb-defra-index"]}</strong>
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

          <section className="boxWeekWeather">
            <div className="week">
              {data.forecast.forecastday.map(({ day, date }) => {
                const dayDate = new Date(date).toLocaleDateString("pt-br", {
                  weekday: "short",
                });

                return (
                  <CardDays
                    key={dayDate}
                    name={dayDate}
                    img={day.condition.icon}
                    min={day.mintemp_c}
                    max={day.maxtemp_c}
                  />
                );
              })}
            </div>
          </section>
        </article>
      )}
    </Container>
  );
}
