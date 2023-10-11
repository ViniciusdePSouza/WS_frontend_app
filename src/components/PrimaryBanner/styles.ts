import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.6rem;

  border-bottom: 4px solid ${({ theme }) => theme.COLORS.GRAY_50};

  padding-bottom: 4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: 3.6rem;
    font-weight: 700;
  }

  p {
    font-size: 1.8rem;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export const ButtonDiv = styled.div`
  width: 30%;
`;
