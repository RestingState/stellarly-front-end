import { FC } from 'react';
// Styles
import {
  Wrapper,
  Form,
  Title,
  Field,
  MessageField,
  FieldTitle,
  MessageFieldTitle,
  FieldInput,
  FieldInputMessage,
  BtnWrapper,
  Error
} from './ContactForm.styles';
// Components
import Button from '@mui/material/Button';
// Hooks
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Validation Schemas
import { schema } from '../../../schemas/contactFormSchema';
// Types
import {
  IContactFormData,
  defaultContactFormData
} from '../../../types/contactForm';

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: defaultContactFormData
  });

  const onSubmit = async (data: IContactFormData) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Title>Direct contact form:</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <FieldTitle>E-mail:</FieldTitle>
          <FieldInput {...register('email')} />
          <Error>{errors.email?.message}</Error>
        </Field>
        <Field>
          <FieldTitle>Name:</FieldTitle>
          <FieldInput {...register('name')} />
          <Error>{errors.name?.message}</Error>
        </Field>
        <MessageField>
          <MessageFieldTitle>Message:</MessageFieldTitle>
          <FieldInputMessage rows={5} {...register('message')} />
          <Error>{errors.message?.message}</Error>
        </MessageField>
        <BtnWrapper>
          <Button
            sx={{ width: '100%' }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </BtnWrapper>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
