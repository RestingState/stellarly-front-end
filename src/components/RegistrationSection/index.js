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
import ListInput from '../ListInput';
// API
import { createUser, loginUser } from '../../api/userAPI';
import { getCitiesInfo } from '../../api/citiesAPI';

const RegistrationSection = ({ userData, setUserData }) => {
  const [cityName, setCityName] = useState('');
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

  const isCityValid = async () => {
    try {
      const data = { name: cityName };
      const response = await getCitiesInfo(data);
      const onlyOneCity = response.data.length === 1;
      if (onlyOneCity) {
        const city_id = response.data[0].id;
        setUserData({ ...userData, city_id });
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
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
    const validCity = await isCityValid();
    if (!validCity) {
      errorMessage.current = 'city is not valid';
      setErrorPopupActive(true);
      return;
    }
    if (existEmptyFields()) {
      errorMessage.current = 'all fields has to be filled';
      setErrorPopupActive(true);
      return;
    }

    try {
      const response = await createUser(userData);
      errorMessage.current = 'Success';
      setErrorPopupActive(true);
    } catch (e) {
      if (e.response.status === 400) {
        errorMessage.current = e.response.data.message;
        setErrorPopupActive(true);
      }
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
                <ListInput
                  searchTerm={cityName}
                  setSearchTerm={setCityName}
                  fetchData={getCitiesInfo}
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
