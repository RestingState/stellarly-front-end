import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  inset: 5% 0 0 -25%;
  height: 90%;
  width: 20%;
  padding: 1em 0.7em 1em 0.7em;
  background: var(--darkGrey);
  z-index: 100;
  border-radius: 30px;
  transition: inset 0.8s ease;

  ${props =>
    props.active &&
    css`
      inset: 5% 0 0 2%;
    `}
`;

export const CloseBtn = styled.i`
  position: absolute;
  right: 0.8em;
  font-size: 130%;
  cursor: pointer;
  color: var(--white);
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  color: var(--white);
`;

export const Property = styled.div`
  margin: 0.7em 0;
`;

export const MultiProperty = styled(Property)``;
