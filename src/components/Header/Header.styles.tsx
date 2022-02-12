import styled, { css } from 'styled-components';

interface WrapperProps {
  active?: boolean;
  fixed?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  color: var(--white);
  padding: 1.6em 3em;

  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}

  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      z-index: 10000;
      top: 0;
      left: 0;
    `}

  @media (max-width: 60em) {
    padding: 0.8em 1.2em;
  }

  @media (max-width: 40em) {
    padding: 0.8em 0.5em;
  }
`;

export const Logo = styled.span`
  cursor: pointer;
  font-size: 2rem;

  @media (max-width: 60em) {
    font-size: 1.5rem;
  }

  @media (max-width: 40em) {
    font-size: 1.2rem;
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

  @media (max-width: 60rem) {
    ul {
      font-size: 1.2rem;
      gap: 1.5rem;
    }
  }

  @media (max-width: 40em) {
    ul {
      font-size: 0.8rem;
      gap: 0.8rem;
    }
  }
`;
