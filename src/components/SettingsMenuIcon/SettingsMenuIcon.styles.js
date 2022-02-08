import styled, { css } from 'styled-components';

export const Icon = styled.i`
  color: white;
  font-size: 2rem;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      display: none;
    `}
`;
