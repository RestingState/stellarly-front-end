import styled, { css } from 'styled-components';

interface WrapperProps {
  active?: boolean;
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
`;
