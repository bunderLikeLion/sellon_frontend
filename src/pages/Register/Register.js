import { userAtom } from 'state';
import { useUserActions } from '../../actions';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

const Register = ({ history }) => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const userActions = useUserActions();

  useEffect(() => {
    // redirect to home if already logged in
    if (user) navigate('/');
  }, []);

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required'),
    password1: Yup.string().required('password1 is required'),
    password2: Yup.string().required('Password2 is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  const onSubmit = ({ username, email, password1, password2 }) => {
    userActions.register(username, email, password1, password2);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input type="text" {...register('username')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register('email')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Password1</label>
          <input type="password" {...register('password1')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Password2</label>
          <input type="password" {...register('password2')} />
          <div>{errors.password?.message}</div>
        </div>
        <button disabled={isSubmitting}>
          {isSubmitting && 'Submitting...'}
          Login
        </button>
        {errors.apiError && <div>{errors.apiError?.message}</div>}
      </form>
    </div>
  );
};

export default Register;
