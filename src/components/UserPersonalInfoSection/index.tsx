import { FC, useState, useEffect } from 'react';
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
import { getUserData } from '../../api/userAPI';

const UserPersonalInfoSection: FC = () => {
  const [loginFormActive, setLoginFormActive] = useState<boolean>(false);
  const [popupActive, setPopupActive] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    cityId: 0
  });

  useEffect(() => {
    (async () => {
      try {
        const userData = await getUserData();
        // if (response.status === 401) {
        //   setLoginFormActive(true);
        //   return;
        // }
        // if (response.status !== 200) {
        //   throw Error;
        // }
        setUserData(userData);
      } catch (e) {
        setPopupActive(true);
      }
    })();
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
      {/* <LoginForm active={loginFormActive} setActive={setLoginFormActive} /> */}
      <Popup
        active={popupActive}
        setActive={setPopupActive}
        message={'Error'}
      />
    </>
  );
};

export default UserPersonalInfoSection;
