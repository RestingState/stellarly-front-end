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
import AlertPopup from '../AlertPopup';
// API
import { getUserData } from '../../api/userAPI';
// Types
import type { Color } from '@material-ui/lab/Alert';

interface IAlertData {
  title: string;
  message: string;
  severity: Color;
}

const UserPersonalInfoSection: FC = () => {
  const [loginFormActive, setLoginFormActive] = useState<boolean>(false);
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<IAlertData>({
    title: '',
    message: '',
    severity: 'error'
  });
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
        setAlertData({
          title: 'error',
          message: 'Server error',
          severity: 'error'
        });
        setAlertActive(true);
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
      <AlertPopup
        active={alertActive}
        setActive={setAlertActive}
        title={alertData.title}
        message={alertData.message}
        severity={alertData.severity}
      />
    </>
  );
};

export default UserPersonalInfoSection;
