import React, { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Logo, NavBar } from "./Header.styles";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState(false);
  const [userIsAuth, setUserIsAuth] = useState(true);

  const handleHeader = () => {
    if (window.scrollY > 1) {
      setActiveHeader(true);
    } else {
      setActiveHeader(false);
    }
  };

  window.addEventListener("scroll", handleHeader);

  return (
    <Wrapper active={activeHeader}>
      <Link to="/">
        <Logo>STELLARLY</Logo>
      </Link>
      <NavBar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Personal page</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </NavBar>
    </Wrapper>
  );
};

export default Header;
