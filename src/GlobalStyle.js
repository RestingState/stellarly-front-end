import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --darkGrey: #131313;
  }

  * {
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
