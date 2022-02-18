import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10vh 0 15vh 15vw;
  background-color: #101010;
  color: white;

  @media (max-width: 45rem) {
    padding: 2rem 0;
  }
`;

export const Content = styled.div``;

export const Title = styled.div`
  font-size: var(--fontSuperBig);

  @media (max-width: 45rem) {
    text-align: center;
    font-size: var(--fontMed);
  }
`;

export const Description = styled.div`
  font-size: var(--fontMed);
  padding: 1.5rem 0;

  @media (max-width: 45rem) {
    text-align: center;
    font-size: var(--fontSmall);
    padding: 0.8rem 0;
  }
`;

export const FieldForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 45rem) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const Field = styled.div`
  padding: 1rem 0;
  font-size: var(--fontMedSmall);
  flex-basis: 50%;

  @media (max-width: 45rem) {
    font-size: var(--fontSmall);
  }
`;

export const Ref = styled.div`
  text-decoration: underline;
  padding: 1rem 0;
  font-size: var(--fontMedSmall);
  flex-basis: 50%;

  @media (max-width: 45rem) {
    font-size: var(--fontSmall);
  }
`;
