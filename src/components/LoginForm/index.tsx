import { FC, useState } from 'react';
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
import { schema } from '../../schemas/loginSchema';
// constants
import { userToken } from '../../types/sessionStorage';
// Types
import { IUserLoginData, defaultLoginData } from '../../types/user';

interface LoginFormProps {
  active: boolean;
  setActive: (bool: boolean) => void;
  previousPage: string;
}

const LoginForm: FC<LoginFormProps> = ({ active, setActive, previousPage }) => {
  const [toRegisterPage, setToRegisterPage] = useState<boolean>(false);
  const [toPreviousPage, setToPreviousPage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IUserLoginData>({
    resolver: yupResolver(schema),
    defaultValues: defaultLoginData
  });

  const onSubmit = async (data: IUserLoginData): Promise<void> => {
    try {
      const response = await loginUser(data);
      sessionStorage.setItem(userToken, response.data.token);
      setToPreviousPage(true);
    } catch (e: any) {
      if (e.response.status === 400 || e.response.status === 404) {
        setErrorMessage('Invalid username or password was provided');
      } else {
        setErrorMessage('Server Error. Please try again later');
      }
    }
  };

  const handleCloseBtn = (): void => {
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
