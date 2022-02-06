import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  ${(props) =>
    props.onTop &&
    css`
      z-index: 10000;
    `}
`;

export const Content = styled.div`
  background-color: white;
  transform: scale(0.5);
  transition: 0.4s all;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1);
    `}
`;
