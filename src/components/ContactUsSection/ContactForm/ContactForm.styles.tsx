import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Form = styled.div`
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const MessageField = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FieldTitle = styled.div`
  font-size: 1.2rem;
`;

export const MessageFieldTitle = styled.div``;

export const FieldInput = styled.input``;

export const FieldInputMessage = styled.textarea`
  width: 100%;
`;

export const BtnWrapper = styled.div`
  width: 10rem;
`;

export const Error = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;
