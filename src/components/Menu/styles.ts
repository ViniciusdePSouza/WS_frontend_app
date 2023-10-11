import { styled } from "styled-components";

export type AnchorTextDecoration = boolean;

interface AnchorContainerProps {
  active: AnchorTextDecoration;
}

export const Container = styled.nav`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 4px solid #000;
  border-bottom: 4px solid #000;
  border-left: 4px solid #000;

  font-size: 2.4rem;
  font-weight: 400;

  h2 {
    margin: 2rem auto 5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    gap: 1rem;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
  }
`;

export const Anchor = styled.a<AnchorContainerProps>`
  text-decoration: none;
  color: #333;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
`;
