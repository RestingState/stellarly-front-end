import { useState } from 'react';
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
  Eye,
  PasswordInput,
  GlobalErrorMessage,
  Line,
  Ref
} from './LoginForm.styles';
// Components
import Popup from '../Popup';
import Button from '@mui/material/Button';
import SubmitButton from '../SubmitButton';
// Hooks
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// API
import { loginUser } from '../../api/userAPI';
// Validation Schemas
import { schema, defaultValues } from '../../schemas/loginSchema';
// constants
import { userToken } from '../../types/sessionStorage';

const LoginForm = ({ active, setActive, previousPage }) => {
  const [toRegisterPage, setToRegisterPage] = useState(false);
  const [toPreviousPage, setToPreviousPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      sessionStorage.setItem(userToken, response.data.token);
      setToPreviousPage(true);
    } catch (e) {
      if (e.status === 400 || e.status === 404) {
        setErrorMessage('Invalid username or password was provided');
      } else {
        setErrorMessage('Server Error. Please try again later');
      }
    }
  };

  const handleCloseBtn = () => {
    reset();
    setErrorMessage('');
    setActive(false);
  };

  if (toRegisterPage) {
    return <Navigate to="/registration" />;
  }

  if (toPreviousPage && previousPage) {
    return <Navigate to={previousPage} />;
  }

  return (
    <>
      <Popup active={active} setActive={setActive} controlledOnClose top>
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
                  <PasswordInput>
                    <Input
                      {...register('password')}
                      type={passwordShown ? 'text' : 'password'}
                    />
                    <Eye
                      className="far fa-eye"
                      onClick={() => setPasswordShown(!passwordShown)}
                    />
                  </PasswordInput>
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
            onClick={() => setToRegisterPage(true)}
          >
            Sign up
          </Button>
        </Wrapper>
      </Popup>
    </>
  );
};

export default LoginForm;
