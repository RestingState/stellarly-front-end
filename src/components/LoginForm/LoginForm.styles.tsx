import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 5rem;
  background-color: #101010;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 75rem) {
    width: 50vw;
  }

  @media (max-width: 60rem) {
    width: 70vw;
  }

  @media (max-width: 35rem) {
    padding: 1rem 0;
    width: 85vw;
  }
`;

export const Title = styled.div`
  font-size: var(--fontBig);
  font-weight: 600;

  @media (max-width: 35rem) {
    font-size: var(--fontMed);
  }
`;

export const CloseBtn = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: var(--fontBig);
  cursor: pointer;

  @media (max-width: 35rem) {
    font-size: var(--fontMed);
  }
`;

export const Form = styled.form`
  margin-top: 2rem;
  width: 20vw;

  @media (max-width: 75rem) {
    width: 35vw;
  }

  @media (max-width: 60rem) {
    width: 45vw;
  }

  @media (max-width: 35rem) {
    margin-top: 1.5rem;
    width: 50vw;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 35rem) {
    gap: 1rem;
  }
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;

  @media (max-width: 45rem) {
    flex-direction: column;
    align-items: center;
    justify-content: initial;
  }

  @media (max-width: 35rem) {
    gap: 1rem;
  }
`;

export const FieldTitle = styled.span`
  @media (max-width: 75rem) {
    font-size: var(--fontSmall);
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
`;

export const Input = styled.input`
  width: 100%;
`;

export const Error = styled.div`
  margin-top: 0.5rem;
  font-size: var(--fontSmall);
  text-align: center;

  @media (max-width: 35rem) {
    margin-top: 0.2rem;
    font-size: var(--fontVerySmall);
  }
`;

export const Eye = styled.i`
  position: absolute;
  right: -2rem;
`;

export const PasswordInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const GlobalErrorMessage = styled(Error)`
  margin-top: 1.5rem;
  font-size: var(--fontMedSmall);

  @media (max-width: 45rem) {
    margin-top: 1rem;
    font-size: var(--fontSmall);
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const Ref = styled.span`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;
