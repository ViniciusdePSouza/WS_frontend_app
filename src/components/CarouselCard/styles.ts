import { styled } from "styled-components";

export const Container = styled.div`
  width: 68%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 200px;
    max-height: 200px;
    width: auto;
    height: auto;
    border-radius: 16px;
  }

  span {
    margin-top: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 2rem;
  }
`;
