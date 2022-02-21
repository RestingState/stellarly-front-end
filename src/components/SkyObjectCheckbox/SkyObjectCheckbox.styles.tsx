import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 60rem) {
    font-size: var(--fontSmall);
  }
`;
