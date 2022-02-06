import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Styles
import { Wrapper, Logo, NavBar } from './Header.styles';
// Components
import LoginForm from '../LoginForm';
// API
import { getUserInfo } from '../../api/userAPI';

const Header = ({ active, fixed = false }) => {
  const navigate = useNavigate();
  const [loginFormActive, setLoginFormActive] = useState(false);

  const isAuth = async () => {
    try {
      const response = await getUserInfo();
      if (response.status === 200) {
        return true;
      }
    } catch (e) {
      return false;
    }
  };

  const handlePersonalPageLink = () => {
    isAuth()
      .then((response) => {
        if (response) {
          navigate('/account');
        } else {
          setLoginFormActive(true);
        }
      })
      .catch(() => {
        setLoginFormActive(true);
      });
  };

  return (
    <>
      <LoginForm active={loginFormActive} setActive={setLoginFormActive} />
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
              <span onClick={handlePersonalPageLink}>Personal page</span>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </NavBar>
      </Wrapper>
    </>
  );
};

export default Header;
