import styled from "styled-components";

export const Container = styled.div`
  width: 12rem;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  scroll-snap-align: center;

  & > * {
    color: ${({ theme }) => theme.colors.neutral.white};

    text-shadow: -1px 1px 3px #0005;
  }

  h1{
    font-size: 1.6rem;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;

    margin: 0 auto;
  }

  span {
    font-size: 1.4rem;
  }
`;
