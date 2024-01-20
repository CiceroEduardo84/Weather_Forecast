import styled from "styled-components";

export const Container = styled.div`
 
  height: 3.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.2rem;

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;
