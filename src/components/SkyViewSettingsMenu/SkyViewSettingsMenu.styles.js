import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: -50%;
  height: 100%;
  width: 35%;
  background: var(--darkGrey);
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
  margin-top: 1.5rem;
`;

export const CloseBtn = styled.i`
  position: absolute;
  margin-left: 1.8rem;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 5rem 0 1.8rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const CompoundSection = styled.div`
  display: flex;
`;

export const Segment = styled.div`
  display: flex;
`;

export const SectionTitle = styled.span`
  font-size: 1.5rem;
`;

export const InputName = styled.div`
  width: 50%;
  font-size: 1.1rem;
`;

export const Input = styled.input``;

export const SubSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
