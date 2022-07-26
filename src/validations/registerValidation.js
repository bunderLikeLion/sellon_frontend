import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const registerValidation = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required'),
    password1: Yup.string().required('password1 is required'),
    password2: Yup.string().required('Password2 is required'),
  });
  return { resolver: yupResolver(validationSchema) };
};

export default registerValidation();
