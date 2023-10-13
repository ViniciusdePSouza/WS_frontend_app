import { styled } from "styled-components";
import Link from "next/link";

type CSSDecoration = "ACTIVE" | "NOT_ACTIVE";

interface LiDecorationProps {
  active: CSSDecoration;
}

const backgroundLiColor = {
  ACTIVE : '#b791ed',
  NOT_ACTIVE : '#6422C4'
}

const boxShadowLi = {
  ACTIVE : '0px 4px 16px 0px #b791ed',
  NOT_ACTIVE : 'none'
}

export const Container = styled.nav`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 2.4rem;
  font-weight: 400;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

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
`;

export const LiMenu = styled.li<LiDecorationProps>`
  width: 100%;
  margin-right: 20px;
  ${(props) => `box-shadow: ${boxShadowLi[props.active]}`};

  padding: 1.2rem;

  border-radius: 8px;

  ${(props) => `background: ${backgroundLiColor[props.active]}`};
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE_100};
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
