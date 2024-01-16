import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.4rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.neutral.gray};

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  strong {
    font-weight: 500;
    font-size: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
