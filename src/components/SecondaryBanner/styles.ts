import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  padding: 0 2rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 50%;
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

  span,
  p {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
