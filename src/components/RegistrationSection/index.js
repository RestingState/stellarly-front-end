import React, { useState, useRef } from 'react';
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
import ErrorPopup from '../ErrorPopup';
import ListInput from '../ListInput';
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
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      username: '',
      city: ''
    }
  });

  const onSubmit = async (data) => {
    const city_id = await getCityIdByName(data.city);
    if (!city_id) {
      return;
    }
    data.city_id = city_id;

    try {
      console.log(data);
      await createUser(data);
    } catch (e) {}
  };

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
                  <Input {...register('first_name')} />
                  <Error>{errors.first_name?.message}</Error>
                </InputField>
              </Field>
              <Field>
                <FieldName>Last name:</FieldName>
                <InputField>
                  <Input {...register('last_name')} />
                  <Error>{errors.last_name?.message}</Error>
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
                    <ListInput
                      searchTerm={value}
                      setSearchTerm={onChange}
                      fetchData={getCitiesInfo}
                    />
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
      {/* <ErrorPopup
        active={errorPopupActive}
        setActive={setErrorPopupActive}
        message={errorMessage.current}
      /> */}
    </Wrapper>
  );
};

export default RegistrationSection;
