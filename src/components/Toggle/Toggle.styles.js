import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
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
      display: none;
    `}
`;
