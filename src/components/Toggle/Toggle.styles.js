import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  cursor: pointer;

  .bar {
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background: var(--white);
  }

  ${(props) =>
    props.active &&
    css`
      z-index: -1;
    `}
`;
