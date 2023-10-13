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

  gap: 1rem;

  span {
    font-size: 3.6rem;
    font-weight: 700;
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: 'Roboto', sans-serif
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 30vh;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    border-radius: 1.6rem;
  }
`;

export const ButtonDiv = styled.div`
  width: 30%;
`;
