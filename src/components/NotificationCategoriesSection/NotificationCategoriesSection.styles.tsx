import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #050505;
  color: white;
`;

export const Title = styled.div`
  padding-top: 10vh;
  text-align: center;
  font-size: var(--fontBigMed);

  @media (max-width: 45rem) {
    font-size: var(--fontMed);
    padding-top: 3rem;
  }
`;

export const Content = styled.div`
  padding-bottom: 10vh;

  @media (max-width: 45rem) {
    padding-bottom: 3rem;
  }
`;

export const CategoryContainer = styled.div``;

export const SubTitle = styled.div`
  padding: 5vh 0 2vh 0;
  text-align: center;
  font-size: var(--fontMed);

  @media (max-width: 45rem) {
    padding: 1.5rem 0 1rem 0;
    font-size: var(--fontMedSmall);
  }
`;

export const Fields = styled.ul`
  list-style-type: disc;
  display: flex;
  flex-wrap: wrap;
`;

export const Field = styled.li`
  padding: 1vh;
  font-size: var(--fontSmall);
  list-style-position: inside;
  text-align: center;
  width: 33%;
  cursor: pointer;
  list-style: none;

  /* ::before {
    content: '+';
    position: relative;
    right: 8px;
    font-size: var(--fontMedSmall);
  } */

  @media (max-width: 45rem) {
    padding: 0.5rem;
    font-size: var(--fontSmall);
  }
`;

export const Sign = styled.i`
  font-size: var(--fontVerySmall);
  padding-right: 8px;
`;
