import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.4rem 2rem;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    width: 4.8rem;
    height: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 1rem;
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

  .boxSearch {
    position: fixed;
    width: 32rem;
    max-height: 36rem;
    top: 6.4rem;
    border-radius: 10px;
    padding: 0.4rem 0.4rem;
    background-color: ${({ theme }) => theme.colors.neutral.white};
    overflow-y: auto;
    /* Works on firefox */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.neutral.gray} #0003;
    z-index: 2;

    .locations {
      display: flex;
      justify-content: start;
      flex-direction: column;
      gap: 0.4rem;
    }
  }

  /* Works on Chrome, Edge, and Safari */
  .boxSearch::-webkit-scrollbar {
    width: 0.8rem;
  }

  .boxSearch::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral.gray};
    border-radius: 10px;
  }

  .boxSearch::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    padding: 2.8rem 2rem;

    form {
      gap: 1.2rem;
    }

    #inputSearch {
      width: 28rem;
      padding: 0 1.2rem;
    }

    button {
      width: 6.8rem;
    }

    .boxSearch {
      width: 36rem;
      height: auto;
      max-height: 32rem;
      top: 9.2rem;
    }
  }

  @media (min-width: 1024px) {
    form {
      gap: 1rem;
    }

    #inputSearch {
      width: 32rem;
      height: 4rem;
    }

    button {
      width: 8rem;
      height: 4rem;
    }

    .boxSearch {
      min-width: 41rem;
      top: 9.6rem;
    }
  }
`;
