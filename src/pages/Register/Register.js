import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import registerValidation from 'validations/registerValidation';
import useSignInMutation from 'queries/auth/useSignInMutation';
import WrapContainer from 'layouts/WrapContainer';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 3rem;
  margin: 0.5rem;
`;

const Input = styled.input`
  margin-bottom: 0.7rem;
  width: 20rem;
  height: 3rem;
  border-radius: 0.7rem;
  background-color: gray;
  color: white;
  font-size: 1rem;
  ::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 0.6rem 0.8rem;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 0.35em;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Register = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    // redirect to home if already logged in
    if (user) navigate('/');
  }, []);

  const { register, handleSubmit, formState } = useForm(registerValidation);

  const { errors, isSubmitting } = formState;

  const { mutate: signInMutate } = useSignInMutation();

  const submit = async (inputData) => {
    signInMutate(inputData);
  };

  return (
    <WrapContainer>
      <Title>Create New Account</Title>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <Input placeholder="닉네임" type="text" {...register('username')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <Input
            placeholder="비밀번호"
            type="password"
            {...register('password1')}
          />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <Input
            placeholder="비밀번호 확인"
            type="password"
            {...register('password2')}
          />
          <div>{errors.password?.message}</div>
        </div>
        <div>
          <Input placeholder="이메일" type="text" {...register('email')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <Input placeholder="홈그라운드" type="text" />
          <div>{errors.username?.message}</div>
        </div>
        <Button disabled={isSubmitting}>
          {isSubmitting && 'Submitting...'}
          회원가입
        </Button>
        {errors.apiError && <div>{errors.apiError?.message}</div>}
      </form>
    </WrapContainer>
  );
};

export default Register;