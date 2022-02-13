import { FC } from 'react';
// Styles
import {
  Wrapper,
  Form,
  Title,
  Field,
  FieldTitle,
  FieldInput,
  FieldInputMessage
} from './ContactForm.styles';
// Components
import Button from '@mui/material/Button';

const ContactForm: FC = () => {
  return (
    <Wrapper>
      <Title>Direct contact form:</Title>
      <Form>
        <Field>
          <FieldTitle>E-mail:</FieldTitle>
          <FieldInput />
        </Field>
        <Field>
          <FieldTitle>Name:</FieldTitle>
          <FieldInput />
        </Field>
        <Field>
          <FieldTitle>Message:</FieldTitle>
          <FieldInputMessage />
        </Field>
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
