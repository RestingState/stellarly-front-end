import React from 'react';
import {
  Content,
  Description,
  Field,
  Fields,
  Input,
  Title,
  FieldName,
  FieldForm,
  Wrapper
} from './RegistrationSection.styles';

const RegistrationSection = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Registration</Title>
        <Description>
          Create an account and configure notifications about events in the
          night sky
        </Description>
        <FieldForm>
          <Fields>
            <Field>
              <FieldName>*Name:</FieldName>
              <Input type="text" />
            </Field>
            <Field>
              <FieldName>*E-mail:</FieldName>
              <Input type="text" />
            </Field>
            <Field>
              <FieldName>*Password:</FieldName>
              <Input type="text" />
            </Field>
            <Field>
              <FieldName>*Repeat password:</FieldName>
              <Input type="text" />
            </Field>
            <Field>
              <FieldName>Longitude:</FieldName>
              <Input type="text" />
            </Field>
            <Field>
              <FieldName>Latitude:</FieldName>
              <Input type="text" />
            </Field>
          </Fields>
        </FieldForm>
      </Content>
    </Wrapper>
  );
};

export default RegistrationSection;
