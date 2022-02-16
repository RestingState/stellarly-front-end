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

  @media (max-width: 40rem) {
    width: 90vw;
  }
`;

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

export const MainSection = styled.div`
  padding: 0 15vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
