import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 2rem;

  font-family: "Roboto", sans-serif;

  p {
    margin-top: 2.4rem;
    font-size: 1.6rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 50%;
    border-radius: 16px;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.2rem;

  padding: 0 1.6rem;

  strong {
    font-size: 2.4rem;
    font-weight: 700;
  }

  span {
    font-size: 1.6rem;
    font-weight: 400;
  }

  button {
    all: unset;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.2rem 0;

    font-size: 2.4rem;
    font-weight: 700;

    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.RED};

    background: ${({ theme }) => theme.COLORS.PURPLE_100};

    cursor: pointer;

    transition: transform 0.2s;

    &:active {
      box-shadow: inset -4px 4px 0 ${({ theme }) => theme.COLORS.GRAY_100};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
