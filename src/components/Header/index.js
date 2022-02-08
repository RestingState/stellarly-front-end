import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Styles
import { Wrapper, Logo, NavBar } from './Header.styles';
// Components
import LoginForm from '../LoginForm';
// API
import { isAuth } from '../../api/userAPI';

const Header = ({ active, fixed = false }) => {
  const navigate = useNavigate();
  const [loginFormActive, setLoginFormActive] = useState(false);
  const [previousPage, setPreviousPage] = useState('');

  const handlePersonalPageLink = async () => {
    try {
      const auth = await isAuth();
      if (auth) {
        setLoginFormActive(false);
        navigate('/account');
      } else {
        setPreviousPage('/account');
        setLoginFormActive(true);
      }
    } catch (e) {
      setPreviousPage('/account');
      setLoginFormActive(true);
    }
  };

  return (
    <>
      <LoginForm
        active={loginFormActive}
        setActive={setLoginFormActive}
        from={previousPage}
      />
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
