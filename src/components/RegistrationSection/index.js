import React from 'react';
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

const RegistrationSection = () => {
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
                <Input type="text" />
              </Field>
              <Field>
                <FieldName>Last name:</FieldName>
                <Input type="text" />
              </Field>
              <Field>
                <FieldName>Username:</FieldName>
                <Input type="text" />
              </Field>
              <Field>
                <FieldName>E-mail:</FieldName>
                <Input type="text" />
              </Field>
              <Field>
                <FieldName>Password:</FieldName>
                <Input type="text" />
              </Field>
            </Fields>
            <Fields>
              <Field>
                <FieldName>City:</FieldName>
                <Input type="text" />
              </Field>
            </Fields>
            <BtnWrapper>
              <Button variant="contained" color="error">
                Registration
              </Button>
            </BtnWrapper>
          </FieldForm>
        </RegistrationForm>
      </Content>
    </Wrapper>
  );
};

export default RegistrationSection;
