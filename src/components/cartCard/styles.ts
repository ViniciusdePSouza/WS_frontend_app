import { styled } from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 6fr 2fr 2fr;

  font-size: 2rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const FirstColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.8rem 1.8rem 1.8rem 5.2rem;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8rem;
`;
