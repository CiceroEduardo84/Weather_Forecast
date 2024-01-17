import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.8rem;
  background: linear-gradient(
    -45deg,
    ${({ theme }) => theme.colors.pestel.pink},
    ${({ theme }) => theme.colors.pestel.purple}
  );

  .boxPageNotFound {
    width: 100%;
    padding: 1rem;
    text-align: center;

    h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.neutral.white};
      text-shadow: -1px 1px 3px #0005;
    }

    img {
      width: 30rem;
      margin: 0 auto;
      filter: drop-shadow(-1px 1px 3px #0003);
    }
  }

  .boxReturnPage {
    width: 100%;
    padding: 1rem;
    display: flex;

    button {
      width: 12rem;
      height: 3.4rem;
      margin: auto;
      border-radius: 1rem;
      box-shadow: -1px 1px 3px 0px #0005;
      text-shadow: -1px 1px 3px #0005;
      color: ${({ theme }) => theme.colors.neutral.white};
      background-color: ${({ theme }) => theme.colors.pestel.violet};
    }
  }
`;
