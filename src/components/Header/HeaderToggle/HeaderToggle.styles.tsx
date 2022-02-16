import styled, { css } from 'styled-components';

interface CloseBtnProps {
  active: boolean;
}

export const Wrapper = styled.div`
  @media (min-width: 40em) {
    display: none;
  }
`;

export const ToggleWrapper = styled.div`
  display: none;
  position: absolute;
  @media (max-width: 40em) {
    display: block;
    right: 0.8rem;
    top: 0.5rem;
  }
`;

export const CloseBtn = styled.i<CloseBtnProps>`
  position: absolute;
  top: 0.4rem;
  right: 0.9rem;
  font-size: 2rem;
  cursor: pointer;

  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}
`;
