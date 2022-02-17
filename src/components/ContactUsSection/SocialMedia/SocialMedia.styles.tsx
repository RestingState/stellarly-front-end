import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 40rem) {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div``;

export const SocailMediaContainer = styled.div`
  padding-bottom: 1rem;
`;

export const Title = styled.div`
  font-size: var(--fontMedSmall);
  font-weight: 600;

  @media (max-width: 40rem) {
    font-size: var(--fontSmall);
  }
`;

export const Account = styled.div`
  font-size: var(--fontMedSmall);
  padding-top: 1rem;

  @media (max-width: 45rem) {
    font-size: var(--fontSmall);
  }
`;
