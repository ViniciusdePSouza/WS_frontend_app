import { styled } from "styled-components";
import Link from "next/link";

type AnchorTextDecoration = 'underline' | 'none';

interface AnchorContainerProps {
  active: AnchorTextDecoration;
}

export const Container = styled.nav`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 2.4rem;
  font-weight: 400;

  background-color: ${({theme}) => theme.COLORS.PURPLE_300};
  color: ${({theme}) => theme.COLORS.WHITE_100};

  h2 {
    margin: 2rem auto 5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    gap: 3.6rem;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
  }
`;

export const Anchor = styled.a<AnchorContainerProps>`
  text-decoration: none;
  text-decoration: ${(props) => props.active};
  color: ${({theme}) => theme.COLORS.WHITE_100};
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: .8rem;
`
