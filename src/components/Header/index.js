import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Logo, NavBar } from './Header.styles';
// Components
import LoginForm from '../LoginForm';
import { getUserInfo } from '../../api/userAPI';

const Header = ({ active, fixed = false }) => {
  return (
    <Wrapper active={active} fixed={fixed}>
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

            {/* <span>Personal page</span>
            <LoginForm active={true} /> */}
            {/* <Link to=>Personal page</Link> */}
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
