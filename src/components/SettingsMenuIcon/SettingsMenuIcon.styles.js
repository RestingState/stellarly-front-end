import styled, { css } from 'styled-components';

export const Icon = styled.i`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  /* position: relative;
  z-index: 10; */

  ${(props) =>
    props.active &&
    css`
      display: none;
    `}
`;
