import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--darkGrey);
  color: var(--white);
  padding: 0.8em 3em;

  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}

  @media (max-width: 45em) {
    padding: 0.8em 2em;
  }
`;

export const Logo = styled.span`
  cursor: pointer;
  font-size: 2rem;

  @media (max-width: 45em) {
    font-size: 1.5rem;
  }
`;

export const NavBar = styled.nav`
  ul {
    cursor: pointer;
    display: flex;
    list-style: none;
    gap: 6rem;
    font-size: 1.4rem;
  }
`;
