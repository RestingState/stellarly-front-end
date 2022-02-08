import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
// Styles
import {
  Wrapper,
  Title,
  CloseBtn,
  Content,
  Fields,
  Field,
  FieldTitle,
  Input,
  Line,
  Ref
} from './LoginForm.styles';
// Components
import Popup from '../Popup';
import Button from '@mui/material/Button';
// import ErrorPopup from '../ErrorPopup';
import SubmitButton from '../SubmitButton';
// API
import { loginUser } from '../../api/userAPI';

const LoginForm = ({ active, setActive }) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  });
  const [toRegisterPage, setToRegisterPage] = useState(false);
  // const [errorPopupActive, setErrorPopupActive] = useState(false);
  // const errorMessageRef = useRef('');

  const handleCloseBtn = () => {
    setActive(false);
  };

  const handleUsernameChange = (e) => {
    const username = e.target.value;
    setUserInfo({ ...userInfo, username });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setUserInfo({ ...userInfo, password });
  };

  // const existEmptyFields = () => {
  //   if (!userInfo.username || !userInfo.password) {
  //     return true;
  //   }
  //   return false;
  // };

  const handleSubmit = async () => {
    // if (existEmptyFields()) {
    //   errorMessageRef.current = 'not all fields are fulfilled';
    //   setErrorPopupActive(true);
    // }
    try {
      const response = await loginUser(userInfo);
      sessionStorage.setItem('user_token', response.data.token);
      setActive(false);
    } catch (e) {
      // errorMessageRef.current = 'Error';
      // setErrorPopupActive(true);
    }
  };

  const handleNavigationToRegisterPage = () => {
    setToRegisterPage(true);
  };

  if (toRegisterPage) {
    return <Navigate to="/registration" />;
  }

  return (
    <>
      {/* <ErrorPopup
        active={errorPopupActive}
        setActive={setErrorPopupActive}
        message={errorMessageRef.current}
        top={true}
      /> */}
      <Popup
        active={active}
        setActive={setActive}
        controlledOnClose={true}
        top={true}
      >
        <Wrapper>
          <Title>Login</Title>
          <CloseBtn className="fas fa-times" onClick={handleCloseBtn} />
          <Content>
            <Fields>
              <Field>
                <FieldTitle>Username:</FieldTitle>
                <Input
                  value={userInfo.username}
                  onChange={handleUsernameChange}
                />
              </Field>
              <Field>
                <FieldTitle>Password:</FieldTitle>
                <Input
                  value={userInfo.password}
                  type="password"
                  onChange={handlePasswordChange}
                />
              </Field>
            </Fields>
            <Line>
              <Ref>Forgot password?</Ref>
              <SubmitButton handleSubmit={handleSubmit} />
            </Line>
          </Content>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={handleNavigationToRegisterPage}
          >
            Register
          </Button>
        </Wrapper>
      </Popup>
    </>
  );
};

export default LoginForm;
