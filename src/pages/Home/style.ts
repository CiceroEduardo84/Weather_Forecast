import styled from "styled-components";
import clouds from "../../assets/clouds.svg";

export const Container = styled.main`
  width: 100%;
  padding: 0 3rem;
  z-index: 0;

  article {
    max-width: 38rem;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    animation: fadeInAnimation ease 1s forwards;

    .boxWeatherForecast {
      width: 100%;
      height: 40vh;

      margin: 0 auto;
      border-radius: 1rem;

      display: grid;
      grid-template-areas: "b b";
      grid-template-columns: repeat(2, 100%);
      grid-template-rows: 100%;

      background-color: ${({ theme }) => theme.colors.pestel.violet};
      box-shadow: -1px 1px 3px 0px #0005;

      overflow-x: auto;
      scrollbar-width: none;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        height: 0rem;
        width: 100%;
      }

      &::-webkit-scrollbar-track {
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        display: none;
      }

      .twoClouds {
        width: clamp(6.4rem, 2.5vw, 6.8rem);
        height: clamp(3rem, 2.5vw, 3.6rem);
        position: absolute;
        top: 0.4rem;
        left: -1.8rem;
        z-index: 1;
      }

      .CardTemperature {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        background: url(${clouds});
        background-repeat: no-repeat;
        background-size: auto;
        background-repeat: no-repeat;
        background-position: right bottom;
        background-attachment: local;

        scroll-snap-align: center;

        .boxLocation {
          width: 100%;
          padding: 0.4rem;
          display: flex;
          justify-content: end;
          gap: 0.4rem;

          img {
            width: 2rem;
            height: 2rem;
          }

          .location {
            max-width: 55%;
            display: flex;
            flex-direction: column;

            span {
              width: 100%;
              word-break: break-all;
              font-size: 1.2rem;

              color: ${({ theme }) => theme.colors.neutral.white};
            }
          }
        }

        .temperature {
          width: 100%;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 0.4rem;
          text-shadow: -1px 1px 3px #0005;

          .datas {
            display: flex;
            align-items: center;
            flex-direction: column;

            strong {
              font-size: clamp(6.2rem, 2.5vw, 7.2rem);
              display: flex;
              justify-content: center;
              color: ${({ theme }) => theme.colors.neutral.white};

              span {
                margin-top: 1.2rem;
                font-size: clamp(1.8rem, 2.5vw, 2.4rem);

                color: ${({ theme }) => theme.colors.neutral.white};
              }
            }

            span {
              display: flex;
              gap: 0.6rem;

              font-weight: bold;
              font-size: clamp(1.6rem, 2.5vw, 2rem);

              color: ${({ theme }) => theme.colors.neutral.white};

              span {
                filter: brightness(0.8);
              }
            }
          }
        }

        .boxStatistics {
          width: 100%;
          display: flex;
          align-items: center;

          overflow-x: auto;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;

          &::-webkit-scrollbar {
            height: 0.4rem;
            width: 100%;
          }

          &::-webkit-scrollbar-track {
            display: none;
          }

          &::-webkit-scrollbar-thumb {
            display: none;
          }

          .statistics {
            padding: 0 0.8rem;
            display: grid;
            grid-template-areas: "c c c";
            grid-template-columns: repeat(3, 12rem);
            grid-template-rows: 6rem;
            gap: 1rem;
          }
        }
      }

      .cardAirQuality {
        padding: 0.4rem;

        display: flex;
        justify-content: space-between;
        flex-direction: column;

        scroll-snap-align: center;
        text-shadow: -1px 1px 3px #0005;

        .title {
          width: 100%;
          margin-top: 1rem;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;

          img {
            width: 4.4rem;
            height: 4.4rem;

            filter: drop-shadow(-1px 1px 3px #0005);
          }

          span {
            font-weight: 600;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.colors.neutral.white};
          }
        }

        .airQuality {
          width: 100%;
          height: 9.2rem;

          display: flex;
          align-items: center;
          justify-content: start;
          flex-direction: column;

          span,
          strong {
            color: ${({ theme }) => theme.colors.neutral.white};
          }

          span {
            font-size: 1.6rem;
          }

          strong {
            font-weight: 700;
            font-size: 4.4rem;
          }
        }

        .quality {
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-around;
        }
      }
    }

    .boxWeekWeather {
      width: 100%;
      height: 18rem;
      margin: 0 auto;

      border-radius: 1rem;

      display: flex;
      align-items: center;

      background-color: ${({ theme }) => theme.colors.pestel.violet};
      box-shadow: -1px 1px 3px 0px #0005;

      overflow-x: auto;
      scrollbar-width: none;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        height: 0rem;
        width: 100%;
      }

      &::-webkit-scrollbar-track {
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        display: none;
      }

      .week {
        height: 16rem;
        padding: 0 0.8rem;

        display: flex;
        gap: 0.8rem;
      }
    }
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    height: auto;

    article {
      width: fit-content;
      gap: 5rem;

      .boxWeatherForecast {
        width: 100%;
        height: 24rem;

        margin: 0;
        border-radius: 0rem;

        grid-template-columns: repeat(2, 28rem);
        gap: 2rem;

        background-color: transparent;
        box-shadow: none;

        overflow-x: visible;

        .CardTemperature {
          border-radius: 1rem;
          background-color: ${({ theme }) => theme.colors.pestel.violet};
          box-shadow: -1px 1px 3px 0px #0005;
        }

        .cardAirQuality {
          border-radius: 1rem;
          background-color: ${({ theme }) => theme.colors.pestel.violet};
          box-shadow: -1px 1px 3px 0px #0005;
        }
      }

      .boxWeekWeather {
        width: 100%;

        overflow-x: visible;

        .week {
          width: 100%;
          padding: 0 1.2rem;

          justify-content: space-around;
          gap: 0rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    article {
      gap: 3rem;

      .boxWeatherForecast {
        height: 28rem;

        grid-template-columns: 36rem 24rem;
        gap: 3rem;

        .twoClouds {
          width: 8rem;
          height: 4rem;
          top: 0.8rem;
          left: -2.8rem;
        }

        .cardAirQuality {
          height: 24rem;
        }
      }
    }
  }
`;
