import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
// Styles
import {
  Wrapper,
  Title,
  CloseBtn,
  Form,
  Fields,
  Field,
  FieldTitle,
  InputField,
  Input,
  Error,
  GlobalErrorMessage,
  Line,
  Ref
} from './LoginForm.styles';
// Components
import Popup from '../Popup';
import Button from '@mui/material/Button';
import SubmitButton from '../SubmitButton';
// Hooks
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../schemas/loginSchema';
// API
import { loginUser } from '../../api/userAPI';

const LoginForm = ({ active, setActive }) => {
  const [toRegisterPage, setToRegisterPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      sessionStorage.setItem('user_token', response.data.token);
      setActive(false);
    } catch (e) {
      if (e.response.status === 400 || e.response.status === 404) {
        setErrorMessage('Invalid username or password was provided');
      }
    }
  };

  const handleCloseBtn = () => {
    reset();
    setErrorMessage('');
    setActive(false);
  };

  const handleNavigationToRegisterPage = () => {
    setToRegisterPage(true);
  };

  if (toRegisterPage) {
    return <Navigate to="/registration" />;
  }

  return (
    <>
      <Popup
        active={active}
        setActive={setActive}
        controlledOnClose={true}
        top={true}
      >
        <Wrapper>
          <Title>Login</Title>
          <CloseBtn className="fas fa-times" onClick={handleCloseBtn} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Fields>
              <Field>
                <FieldTitle>Username:</FieldTitle>
                <InputField>
                  <Input {...register('username')} />
                  <Error>{errors.username?.message}</Error>
                </InputField>
              </Field>
              <Field>
                <FieldTitle>Password:</FieldTitle>
                <InputField>
                  <Input {...register('password')} />
                  <Error>{errors.password?.message}</Error>
                </InputField>
              </Field>
            </Fields>
            {errorMessage && (
              <GlobalErrorMessage>{errorMessage}</GlobalErrorMessage>
            )}
            <Line>
              <Ref>Forgot password?</Ref>
              <SubmitButton type="submit" />
            </Line>
          </Form>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={handleNavigationToRegisterPage}
          >
            Register
          </Button>
        </Wrapper>
      </Popup>
    </>
  );
};

export default LoginForm;
