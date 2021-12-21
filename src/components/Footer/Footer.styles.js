import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #131313;
  padding: 0 5%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    color: #fff;
    list-style: none;
  }

  li {
    font-size: 0.8rem;
  }

  @media (max-width: 40em) {
    li {
      font-size: 0.4rem;
    }
  }
`;
