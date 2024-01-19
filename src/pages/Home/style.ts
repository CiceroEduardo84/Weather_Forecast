import styled from "styled-components";
import clouds from "../../assets/clouds.svg";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: calc(100vh - 6.4rem);
  padding: 0 3rem;
  z-index: 0;

  .boxWeatherForecast {
    width: 26rem;
    height: 22rem;
    margin: auto;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.pestel.violet};

    box-shadow: -1px 1px 3px 0px #0005;

    .CardTemperature {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      background: url(${clouds});
      background-repeat: no-repeat;
      background-size: auto;
      background-repeat: no-repeat;
      background-position: right bottom;
      background-attachment: local;

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
          display: flex;
          flex-direction: column;

          span {
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
            width: 7.2rem;
            font-size: 6.2rem;
            display: flex;
            color: ${({ theme }) => theme.colors.neutral.white};

            span {
              width: 7.2rem;

              margin-top: 1.2rem;
              font-size: 1.8rem;

              color: ${({ theme }) => theme.colors.neutral.white};
            }
          }

          span {
            font-weight: bold;
            font-size: 1.6rem;

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
  }
`;
