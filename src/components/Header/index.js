import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, Logo, SignUpBtn } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>STELLARLY</Logo>
      </Link>
      <SignUpBtn>Sign Up</SignUpBtn>
    </Content>
  </Wrapper>
);

export default Header;
