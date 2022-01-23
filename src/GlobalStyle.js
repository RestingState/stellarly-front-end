import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --darkGrey: #131313;
  }

  * {
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
    /* border: 1px solid red; */
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
