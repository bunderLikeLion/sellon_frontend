import { userAtom } from 'states';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import loginValidation from 'validations/loginValidation';
import { useEffect } from 'react';
import useLoginMutation from 'queries/auth/useLoginMutation';

const Login = () => {
  const navigate = useNavigate();
  const [user] = useRecoilState(userAtom);

  useEffect(() => {
    if (user) navigate('/');
  }, []);

  const { register, handleSubmit, formState } = useForm(loginValidation);

  const { errors, isSubmitting } = formState;

  const { mutate: loginMutate } = useLoginMutation();

  const submit = (inputData) => {
    loginMutate(inputData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Username</label>
          <input type="text" {...register('username')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} />
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

export default Login;
