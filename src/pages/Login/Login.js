import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import loginValidation from 'validations/loginValidation';
import { useEffect } from 'react';
import useLoginMutation from 'queries/auth/useLoginMutation';
import WrapContainer from 'layouts/WrapContainer';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import styled from 'styled-components';

const Logo = styled.div`
  width: 7rem;
  height: 7rem;
  background: red;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  margin-bottom: 0.7rem;
  width: 13rem;
  height: 2rem;
  border-radius: 0.3rem;
`;

const Button = styled.button`
  max-width: 100%;
  padding: 0.6rem 0.8rem;
  color: rgb(253, 249, 243);
  font-weight: 600;
  background: #f03d4e;
  border: none;
  border-radius: 0.35em;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  margin-bottom: 0.2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;


const Login = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

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
      <Logo />
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <Input placeholder="ID" type="text" {...register('username')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            {...register('password')}
          />
          <div>{errors.password?.message}</div>
        </div>
        <Button disabled={isSubmitting}>
          {isSubmitting && 'Submitting...'}
          Sign In
        </Button>
        {errors.apiError && <div>{errors.apiError?.message}</div>}
      </form>
      <Link to="/register">
        <Button>회원가입</Button>
      </Link>
     
    </WrapContainer>
  );
};

export default Login;
