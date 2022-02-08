import React from 'react';
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
  return (
    <Wrapper>
      <Title>Chosen notification categories:</Title>
      <Content>
        <CategoryContainer>
          <SubTitle>Satellites:</SubTitle>
          <Fields>
            <Field>Boop</Field>
            <Field>Boop</Field>
            <Field>Boop</Field>
          </Fields>
        </CategoryContainer>
        <CategoryContainer>
          <SubTitle>Something else:</SubTitle>
          <Fields>
            <Field>Boop</Field>
            <Field>Boop</Field>
            <Field>Boop</Field>
            <Field>Boop</Field>
          </Fields>
        </CategoryContainer>
      </Content>
    </Wrapper>
  );
};

export default NotificationCategoriesSection;
