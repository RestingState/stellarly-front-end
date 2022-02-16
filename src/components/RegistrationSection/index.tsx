import { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
// Styles
import {
  Content,
  Description,
  RegistrationForm,
  Field,
  Fields,
  InputField,
  Error,
  Input,
  Title,
  FieldName,
  FieldForm,
  Wrapper,
  BtnWrapper
} from './RegistrationSection.styles';
// Components
import AlertPopup from '../AlertPopup';
import Button from '@mui/material/Button';
import ListInput from '../ListInput';
// Hooks
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// API
import { createUser } from '../../api/userAPI';
import { getCitiesInfo, getCityIdByName } from '../../api/citiesAPI';
// Validation Schemas
import { schema } from '../../schemas/registrationSchema';
// Types
import { ICity } from '../../types/city';
import {
  IUserRegistrationData,
  defaultRegistrationData
} from '../../types/user';
import type { Color } from '@material-ui/lab/Alert';

interface IAlertData {
  title: string;
  message: string;
  severity: Color;
}

const RegistrationSection: FC = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [toHome, setToHome] = useState<boolean>(false);
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<IAlertData>({
    title: '',
    message: '',
    severity: 'error'
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IUserRegistrationData>({
    resolver: yupResolver(schema),
    defaultValues: defaultRegistrationData
  });

  const fetchCities = async (searchTerm: string) => {
    try {
      const data = { name: searchTerm };
      const response = await getCitiesInfo(data);
      setCities(response.data);
    } catch (e) {}
  };

  const onSubmit = async (data: IUserRegistrationData) => {
    const cityId = await getCityIdByName(data.city);
    if (!cityId) {
      setAlertData({
        title: 'Error',
        message: 'Such city was not found',
        severity: 'error'
      });
      setAlertActive(true);
      return;
    }

    try {
      await createUser({ ...data, cityId });
      setAlertData({
        title: 'Success',
        message: 'Navigate to home page...',
        severity: 'success'
      });
      setAlertActive(true);
      // setToHome(true);
      setTimeout(() => setToHome(true), 2000);
    } catch (e: any) {
      if (e.response.status === 400 || e.response.status === 403) {
        console.log(e.response.data);
        setAlertData({
          title: 'Error',
          message: e.response.data.message,
          severity: 'error'
        });
        setAlertActive(true);
      } else {
        setAlertData({
          title: 'Error',
          message: 'Server error',
          severity: 'error'
        });
        setAlertActive(true);
      }
    }
  };

  if (toHome) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper>
      <Content>
        <Title>Registration</Title>
        <Description>
          Create an account and configure notifications about events in the
          night sky
        </Description>
        <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <FieldForm>
            <Fields>
              <Field>
                <FieldName>First name:</FieldName>
                <InputField>
                  <Input {...register('firstName')} />
                  <Error>{errors.firstName?.message}</Error>
                </InputField>
              </Field>
              <Field>
                <FieldName>Last name:</FieldName>
                <InputField>
                  <Input {...register('lastName')} />
                  <Error>{errors.lastName?.message}</Error>
                </InputField>
              </Field>
              <Field>
                <FieldName>Username:</FieldName>
                <InputField>
                  <Input {...register('username')} />
                  <Error>{errors.username?.message}</Error>
                </InputField>
              </Field>
              <Field>
                <FieldName>E-mail:</FieldName>
                <InputField>
                  <Input {...register('email')} />
                  <Error>{errors.email?.message}</Error>
                </InputField>
              </Field>
              <Field>
                <FieldName>Password:</FieldName>
                <InputField>
                  <Input {...register('password')} />
                  <Error>{errors.password?.message}</Error>
                </InputField>
              </Field>
            </Fields>
            <Fields>
              <Field>
                <FieldName>City:</FieldName>
                <Controller
                  control={control}
                  name="city"
                  render={({ field: { value, onChange } }) => (
                    <InputField>
                      <ListInput
                        searchTerm={value}
                        setSearchTerm={onChange}
                        data={cities}
                        fetchData={fetchCities}
                      />
                      <Error>{errors.city?.message}</Error>
                    </InputField>
                  )}
                ></Controller>
              </Field>
            </Fields>
            <BtnWrapper>
              <Button type="submit" variant="contained" color="primary">
                Sign up
              </Button>
            </BtnWrapper>
          </FieldForm>
        </RegistrationForm>
      </Content>
      <AlertPopup
        active={alertActive}
        setActive={setAlertActive}
        title={alertData.title}
        message={alertData.message}
        severity={alertData.severity}
      />
    </Wrapper>
  );
};

export default RegistrationSection;
