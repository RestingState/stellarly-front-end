import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Form = styled.form`
  max-width: 25rem;

  @media (max-width: 40rem) {
    max-width: 100vw;
  }
`;

export const Title = styled.div`
  font-size: var(--fontMedSmall);
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const Fields = styled.div`
  max-width: 16rem;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`;

export const MessageField = styled.div`
  font-size: var(--fontMedSmall);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FieldTitle = styled.div`
  font-size: var(--fontMedSmall);

  @media (max-width: 40rem) {
    font-size: var(--fontSmall);
  }
`;

export const MessageFieldTitle = styled.div`
  font-size: var(--fontMedSmall);

  @media (max-width: 40rem) {
    font-size: var(--fontSmall);
  }
`;

export const FieldInput = styled.input``;

export const FieldInputMessage = styled.textarea`
  width: 100%;
`;

export const BtnWrapper = styled.div`
  width: 10rem;

  @media (max-width: 40rem) {
    align-self: center;
  }
`;

export const Error = styled.div`
  margin-top: 0.5rem;
  font-size: var(--fontSmall);
  text-align: right;
  width: 100%;
`;
