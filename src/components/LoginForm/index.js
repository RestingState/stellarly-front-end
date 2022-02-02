import React from 'react';
// Styles
import {
  Wrapper,
  Title,
  Content,
  Fields,
  Field,
  FieldTitle,
  Input,
  Line,
  Ref
} from './LoginForm.styles';
// Components
import Popup from '../Popup';
import SubmitButton from '../SubmitButton';

const LoginForm = ({ active, setActive }) => {
  return (
    <Popup active={active} setActive={setActive}>
      <Wrapper>
        <Title>Login</Title>
        <Content>
          <Fields>
            <Field>
              <FieldTitle>Username:</FieldTitle>
              <Input />
            </Field>
            <Field>
              <FieldTitle>Password:</FieldTitle>
              <Input />
            </Field>
          </Fields>
          <Line>
            <Ref>Forgot password?</Ref>
            <SubmitButton />
          </Line>
        </Content>
      </Wrapper>
    </Popup>
  );
};

export default LoginForm;
