import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --darkGrey: #131313;
    --fontSuperBig: 2.5rem;
    --fontBig: 2rem;
    --fontBigMed: 1.8rem;
    --fontMed: 1.5rem;
    --fontMedSmall: 1.2rem;
    --fontSmall: 1rem;
    --fontVerySmall: 0.8rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
    /* outline: 1px solid red; */
  }

  body, ul, h3 {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    color: var(--white);
  }

  a {
    color: var(--white);
    text-decoration: none;
  }

  img {
    display: block;
  }
`;
