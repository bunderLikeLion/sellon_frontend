import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginValidation = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  return { resolver: yupResolver(validationSchema) };
};

export default loginValidation();
