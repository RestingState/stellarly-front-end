import styled, { css } from 'styled-components';

interface IconProps {
  active: boolean;
}

export const Icon = styled.i<IconProps>`
  color: white;
  font-size: 2rem;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      display: none;
    `}
`;
