import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--darkGrey);
  color: var(--white);
  padding: 0.8em 8em;

  @media (max-width: 35em) {
    padding: 0.8em 2em;
  }
`;

export const Logo = styled.span`
  cursor: pointer;
  font-size: 2rem;
  color: var(--white);

  @media (max-width: 35em) {
    font-size: 1.5rem;
  }
`;

export const SignUpBtn = styled.a`
  display: inline-block;
  padding: 0.5em 1.5em;
  font-weight: 600;
  border: 1px solid var(--white);
  cursor: pointer;
  transition: transform 0.5s ease;

  :hover {
    transition: all 0.3s ease-out;
    background: var(--white);
    color: var(--darkGrey);
  }

  @media (max-width: 35em) {
    padding: 0.3em 0.9em;
  }
`;
