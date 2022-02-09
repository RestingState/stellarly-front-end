import { useState } from 'react';
// Styles
import {
  CategoryContainer,
  Content,
  Field,
  Fields,
  SubTitle,
  Title,
  Wrapper
} from './NotificationCategoriesSection.styles';

const NotificationCategoriesSection = () => {
  const [satellitesNotifications, setSatellitesNotifications] = useState([
    { id: 1, name: 'Boop' },
    { id: 2, name: 'Boop' },
    { id: 3, name: 'Boop' }
  ]);
  return (
    <Wrapper>
      <Title>Chosen notification categories:</Title>
      <Content>
        <CategoryContainer>
          <SubTitle>Satellites:</SubTitle>
          <Fields>
            {satellitesNotifications.map((notification) => (
              <Field key={notification.id}>{notification.name}</Field>
            ))}
          </Fields>
        </CategoryContainer>
        <CategoryContainer>
          <SubTitle>Something else:</SubTitle>
          <Fields>
            <Fields>
              {satellitesNotifications.map((notification) => (
                <Field key={notification.id}>{notification.name}</Field>
              ))}
            </Fields>
          </Fields>
        </CategoryContainer>
      </Content>
    </Wrapper>
  );
};

export default NotificationCategoriesSection;
