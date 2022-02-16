import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #000000;
  color: var(--white);
  font-size: 1.2em;
  padding: 0 5%;

  ul {
    display: flex;
    justify-content: space-around;
    padding: 1.5em 0 2em;
    list-style: none;
  }

  @media (max-width: 60em) {
    font-size: 1rem;

    ul {
      justify-content: normal;
      flex-wrap: wrap;
    }

    li {
      width: 50%;
      text-align: center;
      padding: 0.5em;
    }
  }
`;

export const CopyrightSign = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em 0 2em 0;

  @media (max-width: 60em) {
    padding: 1rem 0 1rem 0;
  }
`;
