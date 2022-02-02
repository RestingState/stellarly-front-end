import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 5rem;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

export const Content = styled.div`
  margin-top: 2rem;
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

export const Input = styled.input``;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const Ref = styled.span`
  font-weight: 600;
  text-decoration: underline;
`;
