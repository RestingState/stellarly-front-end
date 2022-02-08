import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 5rem;
  background-color: #101010;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

export const CloseBtn = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const Form = styled.form`
  margin-top: 2rem;
  width: 20vw;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const FieldTitle = styled.span``;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
`;

export const Input = styled.input``;

export const Error = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;

export const GlobalErrorMessage = styled(Error)`
  margin-top: 1.5rem;
  font-size: 1.2rem;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Ref = styled.span`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;
