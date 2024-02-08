import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    padding: 2rem;

    a {
      width: 100%;
      height: 6.4rem;
      margin: auto;
      padding: 0.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 1.6rem;

      border-radius: 1rem;
      box-shadow: -1px 1px 3px 0px #0005;
      color: ${({ theme }) => theme.colors.neutral.white};
      background-color: ${({ theme }) => theme.colors.pestel.violet};
    }

    a:hover {
      cursor: pointer;
      filter: brightness(1.1);
      transform: scale(1.01);
    }

  @media (min-width: 768px) {
    width: 100%;
    padding: 3rem;

    a {
      width: 58rem;
    }
  }

  @media (min-width: 1024px) {
    a {
      width: 63rem;
    }
  }
`;
