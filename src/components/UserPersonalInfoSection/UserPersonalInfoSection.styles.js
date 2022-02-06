import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10vh 0 15vh 15vw;
  background-color: #101010;
  color: white;

  @media (max-width: 40rem) {
    padding-top: 1rem;
  }
`;

export const Content = styled.div``;

export const Title = styled.div`
  font-size: 2.5rem;

  @media (max-width: 40rem) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.div`
  font-size: 1.5rem;
  padding: 1.5rem 0;

  @media (max-width: 40rem) {
    font-size: 1.1rem;
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
`;

export const Field = styled.div`
  padding: 1rem 0;
  font-size: 1.3rem;
  flex-basis: 50%;
`;

export const Ref = styled.div`
  text-decoration: underline;
  padding: 1rem 0;
  font-size: 1.3rem;
  flex-basis: 50%;
`;
