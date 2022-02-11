import styled, { css } from 'styled-components';

interface WrapperProps {
  active?: boolean;
  controlledOnClose?: boolean;
  top?: boolean;
}

interface Content {
  active?: boolean;
  controlledOnClose?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
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
    props.controlledOnClose &&
    css`
      pointer-events: none;
    `}


  ${(props) =>
    props.top &&
    css`
      z-index: 10000;
    `}
`;

export const Content = styled.div<Content>`
  background-color: black;
  transform: scale(0);
  transition: 0.4s all;
  pointer-events: none;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1);
    `}

  ${(props) =>
    props.controlledOnClose &&
    css`
      pointer-events: all;
    `}
`;

export const MessageContainer = styled.div``;

export const Message = styled.div`
  color: white;
  font-size: 1.5rem;
`;
