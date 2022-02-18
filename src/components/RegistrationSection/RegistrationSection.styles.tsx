import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #101010;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 45rem) {
    padding-top: 1rem;
    height: initial;
    padding-bottom: 2rem;
  }
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

export const RegistrationForm = styled.form`
  padding-top: 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 45rem) {
    padding-top: 1rem;
  }
`;

export const FieldForm = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  gap: 4rem;

  @media (max-width: 50rem) {
    gap: 2rem;
    flex-direction: column;
  }

  @media (max-width: 40rem) {
    gap: 1rem;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 70rem) {
    width: 100%;
  }

  @media (max-width: 40rem) {
    gap: 1rem;
  }
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: var(--fontMedSmall);

  @media (max-width: 40rem) {
    font-size: var(--fontSmall);
  }
`;

export const FieldName = styled.div``;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
`;

export const Error = styled.div`
  margin-top: 0.5rem;
  font-size: var(--fontSmall);
  text-align: center;
`;

export const Input = styled.input``;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  @media (max-width: 50rem) {
    position: static;
    display: flex;
    justify-content: center;
  }
`;
