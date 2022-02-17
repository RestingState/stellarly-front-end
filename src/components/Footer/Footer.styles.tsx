import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #000000;
  color: var(--white);
  font-size: var(--fontMedSmall);
  padding: 0 2rem;

  ul {
    display: flex;
    justify-content: space-around;
    padding: 0 0 2em 0;
    list-style: none;
  }

  li {
    cursor: pointer;
    padding: 0.2rem 0.4rem;
  }

  li:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  @media (max-width: 60em) {
    font-size: var(--fontSmall);

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
  padding: 1.5em 0;

  @media (max-width: 60em) {
    padding: 1rem 0;
  }
`;
