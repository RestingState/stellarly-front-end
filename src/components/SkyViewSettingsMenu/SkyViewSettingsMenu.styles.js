import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  inset: 5% 0 0 -25%;
  height: 90%;
  width: 20%;
  padding: 1em 0.5em 1em 0.5em;
  background: hsl(0 0% 100% / 0.1);
  z-index: 100;
  border-radius: 30px;
  transition: inset 0.8s ease;

  ${props =>
    props.active &&
    css`
      inset: 5% 0 0 2%;
    `}
`;

export const CloseBtn = styled.img`
  margin: 0 0 0 88%;
  width: 10%;
  min-height: 1em;
  min-width: 1em;
  aspect-ratio: 1;
  cursor: pointer;
`;

export const Content = styled.div`
  h1 {
    text-align: center;
  }
`;
