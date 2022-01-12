import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Registration from "./components/Registration";
import UserPage from "./components/UserPage";
import Footer from "./components/Footer";
// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/account" element={<UserPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
