import styled, { css } from 'styled-components';

interface WrapperProps {
  active: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  left: -50%;
  height: 100%;
  width: 35%;
  padding: 0 1.8rem;
  background: #101010aa;
  z-index: 100;
  transition: inset 0.8s ease;
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${(props) =>
    props.active &&
    css`
      inset: 0;
    `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const CloseBtn = styled.i`
  position: absolute;
  font-size: var(--fontSuperBig);
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: var(--fontBig);
  font-weight: 700;
  text-align: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 45%;
  }

  img {
    width: 100%;
  }

  span {
    font-size: var(--fontMedSmall);
  }

  .names {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Properties = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 45%;
    font-size: var(--fontMedSmall);
  }
`;
