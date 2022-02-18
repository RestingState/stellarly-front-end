import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 40rem) {
    padding-top: 1rem;
    display: block;
  }
`;

export const SocailMediaContainer = styled.div`
  padding: 0 4rem 1rem 0;
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

  @media (max-width: 40rem) {
    font-size: var(--fontSmall);
  }
`;
