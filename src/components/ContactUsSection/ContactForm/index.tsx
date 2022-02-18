import { FC, useState } from 'react';
// Styles
import {
  Wrapper,
  Form,
  Title,
  Fields,
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
import AlertPopup from '../../AlertPopup';
// Hooks
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// API
import { sendFeedback } from '../../../api/userAPI';
// Validation Schemas
import { schema } from '../../../schemas/contactFormSchema';
// Types
import {
  IContactFormData,
  defaultContactFormData
} from '../../../types/contactForm';
import { IAlertData } from '../../../types/alert';

const ContactForm: FC = () => {
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<IAlertData>({
    title: '',
    message: '',
    severity: 'error'
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<IContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: defaultContactFormData
  });

  const onSubmit = async (data: IContactFormData) => {
    try {
      await sendFeedback(data);
      setAlertData({
        title: 'Success',
        message: 'Message is successfully sent',
        severity: 'success'
      });
      setAlertActive(true);
      reset();
    } catch (e) {
      setAlertData({
        title: 'Error',
        message: 'Server error. Please, try again later.',
        severity: 'error'
      });
      setAlertActive(true);
    }
  };

  return (
    <Wrapper>
      <Title>Direct contact form:</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fields>
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
        </Fields>
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

export default ContactForm;
