import styled from "styled-components";

export const Container = styled.div`
  padding: 1.2rem 0.4rem;
  border-radius: 1rem;

  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  background: #6660c8aa;
  box-shadow: -1px 1px 3px 0px #0002;

  scroll-snap-align: center;

  img {
    width: 3.6rem;
    height: 3.6rem;

    filter: drop-shadow(-1px 1px 3px #0005);
  }

  .datas {
    display: flex;
    flex-direction: column;
    text-shadow: -1px 1px 3px #0005;

    & > *,
    strong > * {
      color: ${({ theme }) => theme.colors.neutral.white};
    }

    span {
      font-weight: 400;
      font-size: 1.2rem;
    }

    strong {
      font-size: 1.4rem;

      span {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .datas {
      strong {
        font-size: 1.8rem;

        span {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
