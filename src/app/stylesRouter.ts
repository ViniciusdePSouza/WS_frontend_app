import { styled } from "styled-components";

import Carousel from "better-react-carousel";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  padding: 4rem 6rem;

  h1 {
    font-size: 3.6rem;
    font-weight: bold;
  }
`;

export const CarrouselDiv = styled(Carousel)`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  border: 1px solid #000;

  margin-top: 3rem;
`;

export const LowerBannersDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 2rem 0;
`;
