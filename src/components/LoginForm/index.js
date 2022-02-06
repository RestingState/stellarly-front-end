import React, { useState, useRef } from 'react';
// Styles
import {
  Wrapper,
  Title,
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
// import ErrorPopup from '../ErrorPopup';
import SubmitButton from '../SubmitButton';
// API
import { loginUser } from '../../api/userAPI';

const LoginForm = ({ active, setActive }) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  });
  // const [errorPopupActive, setErrorPopupActive] = useState(false);
  // const errorMessageRef = useRef('');

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

  return (
    <>
      {/* <ErrorPopup
        active={errorPopupActive}
        setActive={setErrorPopupActive}
        message={errorMessageRef.current}
        top={true}
      /> */}
      <Popup active={active} setActive={setActive}>
        <Wrapper>
          <Title>Login</Title>
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
                  onChange={handlePasswordChange}
                />
              </Field>
            </Fields>
            <Line>
              <Ref>Forgot password?</Ref>
              <SubmitButton handleSubmit={handleSubmit} />
            </Line>
          </Content>
        </Wrapper>
      </Popup>
    </>
  );
};

export default LoginForm;
