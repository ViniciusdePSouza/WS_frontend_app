import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2.4rem;

  font-size: 3.6rem;
  font-weight: 700;

  padding: 3rem 0;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
`;
