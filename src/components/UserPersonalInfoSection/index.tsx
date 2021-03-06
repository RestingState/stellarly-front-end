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
import AlertPopup from '../AlertPopup';
// API
import { getUserData } from '../../api/userAPI';
import { getCityNameById } from '../../api/citiesAPI';
// Types
import { IUserPersonalInfo } from '../../types/user';
import { IAlertData } from '../../types/alert';

const UserPersonalInfoSection: FC = () => {
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<IAlertData>({
    title: '',
    message: '',
    severity: 'error'
  });
  const [userData, setUserData] = useState<IUserPersonalInfo>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    city: ''
  });

  useEffect(() => {
    (async () => {
      try {
        const userData = await getUserData();
        const city = await getCityNameById(userData.cityId);
        setUserData({
          firstName: userData.firstName,
          lastName: userData.lastName,
          username: userData.username,
          email: userData.email,
          city
        });
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
              <Field>City: {userData.city}</Field>
              <Ref>Change Password</Ref>
            </Fields>
          </FieldForm>
        </Content>
      </Wrapper>
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
