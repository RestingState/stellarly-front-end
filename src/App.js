import React from "react";
// Components
import Header from "./components/Header";
import SkyView from "./components/SkyView";
// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Header />
      <SkyView />
      <GlobalStyle />
    </>
  );
}

export default App;
