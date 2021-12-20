import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Logo, SignUpBtn } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Logo>STELLARLY</Logo>
    </Link>
    <SignUpBtn>Sign Up</SignUpBtn>
  </Wrapper>
);

export default Header;
