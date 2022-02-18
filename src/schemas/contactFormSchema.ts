import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().email('email is not valid').required('email is required'),
  name: yup.string().required('name is required'),
  message: yup.string().required('message is required')
});
