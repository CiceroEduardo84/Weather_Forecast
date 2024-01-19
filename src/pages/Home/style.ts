import styled from "styled-components";
import clouds from "../../assets/clouds.svg";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 6.4rem);
  padding: 0 3rem;

  .boxWeatherForecast {
    width: 26rem;
    height: 22rem;
    margin: auto;
    border-radius: 1rem;

    background: ${({ theme }) => theme.colors.pestel.violet} url(${clouds});
    background-repeat: no-repeat;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-attachment: local;

    box-shadow: -1px 1px 3px 0px #0005;
  }

  .CardTemperature {
    width: 100%;
    height: 100%;
  }

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
  }
`;
