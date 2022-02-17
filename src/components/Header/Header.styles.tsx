import styled, { css } from 'styled-components';

interface WrapperProps {
  active?: boolean;
  fixed?: boolean;
}

interface NavBarProps {
  active: boolean;
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

  @media (max-width: 45em) {
    display: block;
  }
`;

export const Logo = styled.span`
  cursor: pointer;
  font-size: var(--fontBig);

  @media (max-width: 60em) {
    font-size: var(--fontMed);
  }
`;

export const NavBar = styled.nav<NavBarProps>`
  ul {
    display: flex;
    list-style: none;
    gap: 6rem;
    font-size: var(--fontMed);
  }

  li {
    cursor: pointer;
    padding: 0.2rem 0.4rem;
  }

  li:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  @media (max-width: 60rem) {
    ul {
      font-size: var(--fontMedSmall);
      gap: 1.5rem;
    }
  }

  @media (max-width: 45em) {
    background-color: #080808;
    padding: 1rem 0;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: var(--fontMedSmall);
      gap: 0.8rem;
    }

    ${(props) =>
      !props.active &&
      css`
        display: none;
      `}
  }
`;
