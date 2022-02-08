import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// Styles
import { Wrapper, Logo, NavBar } from './Header.styles';
// Components
import LoginForm from '../LoginForm';
// API
import { isAuth } from '../../api/userAPI';

const Header = ({ active, fixed }) => {
  const [activeLoginForm, setActiveLoginForm] = useState(false);
  const [previousPage, setPreviousPage] = useState('');
  const [toUserPage, setToUserPage] = useState(false);

  const handlePersonalPageLink = async () => {
    try {
      const auth = await isAuth();
      if (auth) {
        setToUserPage(true);
      } else {
        setActiveLoginForm(true);
        setPreviousPage('/account');
      }
    } catch (e) {
      setActiveLoginForm(true);
      setPreviousPage('/account');
    }
  };

  if (toUserPage) {
    return <Navigate to="account" />;
  }

  return (
    <>
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
      <LoginForm
        active={activeLoginForm}
        setActive={setActiveLoginForm}
        previousPage={previousPage}
      />
    </>
  );
};

export default Header;
