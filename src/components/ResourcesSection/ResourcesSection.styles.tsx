import styled, { css } from 'styled-components';

export enum PositionTypes {
  left = 'left',
  right = 'right'
}

interface TitleProps {
  position: PositionTypes;
}

export const Wrapper = styled.div`
  padding: 2rem 0 8rem 0;
  background-color: #050505;
  color: white;
`;

export const Title = styled.div<TitleProps>`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 30%;
  font-size: 2rem;

  ${(props) =>
    (props.position === PositionTypes.left &&
      css`
        justify-content: left;
      `) ||
    (props.position === PositionTypes.right &&
      css`
        justify-content: right;
      `)}
`;

export const Content = styled.div`
  display: flex;
  gap: 5rem;
  margin: 2rem auto 0 auto;
  max-width: 70%;
`;

export const Text = styled.div`
  font-size: 1.3rem;
`;
