import { styled } from "styled-components";

export const TotalRow = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 2rem;

  padding: 2.4rem 5.2rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_100};

  border-radius: 8px;

  margin-top: 5rem;

  h3 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  span {
    font-size: 2.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.PURPLE_500};
  }
`;
