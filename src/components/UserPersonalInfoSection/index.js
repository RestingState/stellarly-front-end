import React, { useState, useEffect, useRef } from 'react';
// Styles
import {
  Content,
  Title,
  Wrapper,
  Description,
  FieldForm,
  Fields,
  Field,
  Ref
} from './UserPersonalInfoSection.styles';
// Components
import LoginForm from '../LoginForm';
import ErrorPopup from '../ErrorPopup';
// API
import { getUserInfo } from '../../api/userAPI';

const UserPersonalInfoSection = () => {
  const [loginFormActive, setLoginFormActive] = useState(false);
  const [errorPopupActive, setErrorPopupActive] = useState(false);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    city_id: ''
  });
  const errorMessageRef = useRef('');

  useEffect(() => {
    const token = sessionStorage.getItem('user_token');
    const getUserData = async () => {
      try {
        const response = await getUserInfo(token);
        if (response.status === 422) {
          setLoginFormActive(true);
          return;
        }
        if (response.status !== 200) {
          throw Error;
        }

        console.log(response.data);
        setUserData(response.data);
        return response.data;
      } catch (e) {
        errorMessageRef.current = 'Error';
        setErrorPopupActive(true);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <LoginForm active={loginFormActive} />
      <ErrorPopup
        active={errorPopupActive}
        setActive={setErrorPopupActive}
        message={errorMessageRef.current}
      />
      <Wrapper>
        <Content>
          <Title>This is your personal page</Title>
          <Description>
            Configure your personal info and set notifications here.
          </Description>
          <FieldForm>
            <Fields>
              <Field>First name: {userData.first_name}</Field>
              <Field>Last name: {userData.last_name}</Field>
              <Field>Username: {userData.username}</Field>
              <Field>E-mail: {userData.email}</Field>
              <Field>City: {userData.city_id}</Field>
              <Ref>Change Password</Ref>
            </Fields>
          </FieldForm>
        </Content>
      </Wrapper>
    </>
  );
};

export default UserPersonalInfoSection;
