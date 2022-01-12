import React, { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Logo, SignUpBtn } from "./Header.styles";

const Header = () => {
  const [userIsAuth, setUserIsAuth] = useState(true);

  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>STELLARLY</Logo>
      </Link>
      {userIsAuth ? (
        <Link to="/account" style={{ textDecoration: "none" }}>
          <h3>My account</h3>
        </Link>
      ) : (
        <Link to="/registration" style={{ textDecoration: "none" }}>
          <SignUpBtn>Sign Up</SignUpBtn>
        </Link>
      )}
    </Wrapper>
  );
};

export default Header;
