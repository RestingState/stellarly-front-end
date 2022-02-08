import * as yup from 'yup';

export const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('email is not valid').required('Email is required'),
  password: yup.string().required('Password is required'),
  city: yup.string().required('City is required')
});
