import styled, { css } from 'styled-components';

interface WrapperProps {
  active: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  left: -100rem;
  height: 100%;
  width: 35%;
  background: #101010aa;
  z-index: 100;
  transition: inset 0.8s ease;
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;

  ${(props) =>
    props.active &&
    css`
      inset: 0;
    `}

  @media (max-width: 82rem) {
    width: 40%;
  }

  @media (max-width: 75rem) {
    width: 50%;
  }

  @media (max-width: 65rem) {
    width: 60%;
  }

  @media (max-width: 55rem) {
    width: 75%;
  }

  @media (max-width: 45rem) {
    top: 2rem;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;

export const CloseBtn = styled.i`
  position: absolute;
  margin-left: 1.8rem;
  font-size: var(--fontSuperBig);
  cursor: pointer;

  @media (max-width: 60rem) {
    margin-left: 1rem;
    font-size: var(--fontMed);
  }
`;

export const Title = styled.div`
  font-size: var(--fontBig);
  font-weight: 700;
  text-align: center;
  width: 100%;

  @media (max-width: 60rem) {
    font-size: var(--fontMed);
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 5rem 0 1.8rem;

  @media (max-width: 60rem) {
    gap: 1.5rem;
    padding: 0 1rem 0 1rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (max-width: 60rem) {
    gap: 1rem;
  }
`;

export const CompoundSection = styled.div`
  display: flex;
`;

export const Segment = styled.div`
  display: flex;
`;

export const SectionTitle = styled.span`
  font-size: var(--fontMed);

  @media (max-width: 60rem) {
    font-size: var(--fontSmall);
  }
`;

export const InputName = styled.div`
  width: 50%;
  font-size: var(--fontSmall);

  @media (max-width: 60rem) {
    font-size: var(--fontVerySmall);
  }
`;

export const Input = styled.input``;

export const SubSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 2%;
  bottom: -1%;

  @media (max-width: 60rem) {
    position: static;
  }
`;
