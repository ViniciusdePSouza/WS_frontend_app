import { styled } from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr;

  font-size: 2rem;

  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_100};

  border-radius: 8px;

  box-shadow: 0px 4px 16px 0px #EAE2FD;
`;

export const FirstColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.8rem 1.8rem 1.8rem 5.2rem;

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8rem;

  span: {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  button {
    all: unset;

    padding: 2rem;

    background-color: ${({ theme }) => theme.COLORS.PURPLE_200};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    cursor: pointer;

    transition: transform 0.2s;

    &:active {
      box-shadow: inset -4px 4px 0 ${({ theme }) => theme.COLORS.PURPLE_300};;
    }

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
