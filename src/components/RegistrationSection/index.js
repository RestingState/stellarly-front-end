import React, { useState, useRef } from 'react';
// Styles
import {
  Content,
  Description,
  RegistrationForm,
  Field,
  Fields,
  Input,
  Title,
  FieldName,
  FieldForm,
  Wrapper,
  BtnWrapper
} from './RegistrationSection.styles';
// Components
import Button from '@mui/material/Button';
import ErrorPopup from '../ErrorPopup';
// User API
import { createUser, loginUser } from '../../api/userAPI';

const RegistrationSection = ({ userData, setUserData }) => {
  const [errorPopupActive, setErrorPopupActive] = useState(false);
  const errorMessage = useRef('');

  const setFirstName = (e) => {
    const fname = e.target.value;
    setUserData({ ...userData, fname });
  };

  const setSecondName = (e) => {
    const sname = e.target.value;
    setUserData({ ...userData, sname });
  };

  const setUsername = (e) => {
    const username = e.target.value;
    setUserData({ ...userData, username });
  };

  const setEmail = (e) => {
    const email = e.target.value;
    setUserData({ ...userData, email });
  };

  const setPassword = (e) => {
    const password = e.target.value;
    setUserData({ ...userData, password });
  };

  const setCity = (e) => {
    const city_id = e.target.value;
    setUserData({ ...userData, city_id });
  };

  const existEmptyFields = () => {
    if (
      !userData.fname ||
      !userData.sname ||
      !userData.username ||
      !userData.email ||
      !userData.password ||
      !userData.city_id
    ) {
      return true;
    }
    return false;
  };

  const register = async () => {
    if (existEmptyFields()) {
      errorMessage.current = 'all fields has to be filled';
      setErrorPopupActive(true);
      return;
    }

    try {
      const response = await createUser(userData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Content>
        <Title>Registration</Title>
        <Description>
          Create an account and configure notifications about events in the
          night sky
        </Description>
        <RegistrationForm>
          <FieldForm>
            <Fields>
              <Field>
                <FieldName>First name:</FieldName>
                <Input
                  type="text"
                  value={userData.fname}
                  onChange={setFirstName}
                />
              </Field>
              <Field>
                <FieldName>Last name:</FieldName>
                <Input
                  type="text"
                  value={userData.sname}
                  onChange={setSecondName}
                />
              </Field>
              <Field>
                <FieldName>Username:</FieldName>
                <Input
                  type="text"
                  value={userData.username}
                  onChange={setUsername}
                />
              </Field>
              <Field>
                <FieldName>E-mail:</FieldName>
                <Input type="text" value={userData.email} onChange={setEmail} />
              </Field>
              <Field>
                <FieldName>Password:</FieldName>
                <Input
                  type="text"
                  value={userData.password}
                  onChange={setPassword}
                />
              </Field>
            </Fields>
            <Fields>
              <Field>
                <FieldName>City:</FieldName>
                <Input
                  type="text"
                  value={userData.city_id}
                  onChange={setCity}
                />
              </Field>
            </Fields>
            <BtnWrapper>
              <Button variant="contained" color="error" onClick={register}>
                Registration
              </Button>
            </BtnWrapper>
          </FieldForm>
        </RegistrationForm>
      </Content>
      <ErrorPopup
        active={errorPopupActive}
        setActive={setErrorPopupActive}
        message={errorMessage.current}
      />
    </Wrapper>
  );
};

export default RegistrationSection;
