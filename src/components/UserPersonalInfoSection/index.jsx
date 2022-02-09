import { useState, useEffect } from 'react';
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
import Popup from '../Popup';
// API
import { getUserInfo } from '../../api/userAPI';

const UserPersonalInfoSection = () => {
  const [loginFormActive, setLoginFormActive] = useState(false);
  const [popupParams, setPopupParams] = useState({
    active: false,
    message: ''
  });
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    cityId: ''
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getUserInfo();
        if (response.status === 401) {
          setLoginFormActive(true);
          return;
        }
        if (response.status !== 200) {
          throw Error;
        }

        setUserData(response.data);
        return response.data;
      } catch (e) {
        setPopupParams({ active: true, message: 'Error' });
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <Wrapper>
        <Content>
          <Title>This is your personal page</Title>
          <Description>
            Configure your personal info and set notifications here.
          </Description>
          <FieldForm>
            <Fields>
              <Field>First name: {userData.firstName}</Field>
              <Field>Last name: {userData.lastName}</Field>
              <Field>Username: {userData.username}</Field>
              <Field>E-mail: {userData.email}</Field>
              <Field>City: {userData.cityId}</Field>
              <Ref>Change Password</Ref>
            </Fields>
          </FieldForm>
        </Content>
      </Wrapper>
      <LoginForm active={loginFormActive} setActive={setLoginFormActive} />
      <Popup
        active={popupParams.active}
        setActive={setPopupParams}
        message={popupParams.message}
      />
    </>
  );
};

export default UserPersonalInfoSection;
