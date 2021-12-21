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

  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: var(--white);
  }

  h3 {
    color: var(--white);
  }
`;
