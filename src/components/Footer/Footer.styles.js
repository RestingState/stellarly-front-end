import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  color: var(--white);
  font-size: 0.8em;
  padding: 0 5%;

  ul {
    display: flex;
    justify-content: space-around;
    padding: 1em 0;
    list-style: none;
  }

  @media (max-width: 60em) {
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
  padding: 1.5em 0 1em 0;
`;
