import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 4px solid ${({ theme }) => theme.COLORS.GRAY_50};

  padding: 0 2rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 50%;
    max-height: 300px;
    border-radius: 16px;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.2rem;

  font-family: "Roboto", sans-serif;

  strong {
    font-size: 2.4rem;
    font-weight: 700;
  }

  span {
    font-size: 1.6rem;
    font-weight: 700;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
