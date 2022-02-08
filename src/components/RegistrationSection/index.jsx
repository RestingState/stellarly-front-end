import React, { useState, useRef } from 'react';
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
import Button from '@mui/material/Button';
import ListInput from '../ListInput';
import Popup from '../Popup';
// Hooks
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../schemas/registrationSchema';
// API
import { createUser } from '../../api/userAPI';
import { getCitiesInfo, getCityIdByName } from '../../api/citiesAPI';

const RegistrationSection = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      username: '',
      city: ''
    }
  });
  const [toHome, setToHome] = useState(false);
  const [popupParams, setPopupParams] = useState({
    active: false,
    message: ''
  });

  const onSubmit = async (data) => {
    const cityId = await getCityIdByName(data.city);
    if (!cityId) {
      return;
    }
    data.cityId = cityId;

    try {
      await createUser(data);
      setToHome(true);
    } catch (e) {
      if (e.status === 400) {
        setPopupParams({ active: true, message: e.data.message });
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
                        fetchData={getCitiesInfo}
                      />
                      <Error>{errors.city?.message}</Error>
                    </InputField>
                  )}
                ></Controller>
              </Field>
            </Fields>
            <BtnWrapper>
              <Button type="submit" variant="contained" color="error">
                Registration
              </Button>
            </BtnWrapper>
          </FieldForm>
        </RegistrationForm>
      </Content>
      <Popup
        active={popupParams.active}
        setActive={setPopupParams}
        message={popupParams.message}
      />
    </Wrapper>
  );
};

export default RegistrationSection;
