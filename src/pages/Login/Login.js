import { userAtom } from 'states';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import loginValidation from 'validations/loginValidation';
import { useEffect } from 'react';
import useLoginMutation from 'queries/auth/useLoginMutation';
import WrapContainer from 'layouts/WrapContainer';

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
    <WrapContainer>
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
      <p>계정이 없으신가요?</p>
      <Link to="/register">
        <button>회원가입 하러 가기</button>
      </Link>
    </WrapContainer>
  );
};

export default Login;
