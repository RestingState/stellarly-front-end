import React from 'react';
import {
  Content,
  Title,
  Wrapper,
  Description
} from './UserPersonalInfoSection.styles';

const UserPersonalInfoSection = () => {
  return (
    <Wrapper>
      <Content>
        <Title>This is your personal page</Title>
        <Description>
          Configure your personal info and set notifications here.
        </Description>
      </Content>
    </Wrapper>
  );
};

export default UserPersonalInfoSection;
