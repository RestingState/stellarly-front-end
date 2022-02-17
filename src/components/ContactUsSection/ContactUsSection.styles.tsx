import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
  background-color: #080808;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 70vw;

  @media (max-width: 45rem) {
    width: 90vw;
  }
`;

export const Title = styled.div`
  font-size: var(--fontSuperBig);

  @media (max-width: 45rem) {
    font-size: var(--fontMed);
  }
`;

export const Description = styled.div`
  font-size: var(--fontMed);
  padding: 1.5rem 0;

  @media (max-width: 45rem) {
    font-size: var(--fontSmall);
    padding: 0.8rem 0;
  }
`;

export const MainSection = styled.div`
  padding: 0 15vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
