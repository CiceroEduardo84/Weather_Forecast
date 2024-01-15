import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.4rem 3.5rem;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  #inputSearch {
    width: 20rem;
    height: 3.6rem;
    padding: 0 0.8rem;
    border-radius: 1rem;
    font-weight: 500;
    font-size: clamp(1.4rem, 2.5vw, 1.6rem);
    box-shadow: -1px 1px 3px 0px #0005;
    color: ${({ theme }) => theme.colors.neutral.black};
    background-color: ${({ theme }) => theme.colors.neutral.white};

    &:focus {
      outline: 0;
    }
  }

  button {
    width: 5rem;
    height: 3.6rem;
    padding: 0 0.8rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 1px 3px 0px #0005;
    background-color: ${({ theme }) => theme.colors.pestel.violet};

    img {
      width: 2.8rem;
      filter: drop-shadow(-1px 2px 3px #0005);
    }

    &:hover {
      cursor: pointer;
      filter: brightness(1.05);
    }
  }
`;
