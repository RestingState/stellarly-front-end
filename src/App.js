import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Registration from './components/Registration';
import UserPage from './components/UserPage';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/account" element={<UserPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
