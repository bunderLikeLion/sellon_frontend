import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import registerValidation from 'validations/registerValidation';
import useSignInMutation from 'queries/auth/useSignInMutation';
import styled from 'styled-components';
import SignPic from 'images/Sign_Img.jpeg';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 92vh;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  height: 27rem;
  margin-top: 4%;
`;

const GuideContainer = styled.div`
  width: 50%;
  margin-bottom: 3rem;
`;

const Guide = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const Input = styled.input`
  width: 27rem;
  height: 4rem;
  border: none;
  border-radius: 0.5rem;
  margin-left: 5rem;
  padding: 2rem;
  font-size: 1.4rem;
  opacity: 70%;
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_font__secondary};
  ::placeholder {
    font-size: 1.4rem;
    color: ${(props) => props.theme.color_font__secondary};
  }
  //자동완성 글씨, 배경 자동 변경 방지 설정
  :-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.theme.color_font__secondary} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const ErrorMsg = styled.div`
  margin: 1rem 0 0.5rem 6rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ButtonContainer = styled.div`
  width: 50%;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  width: 8.4rem;
  height: 2.6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.3rem;
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__secondary};
  }
`;

const Img = styled.img`
  width: 50%;
  height: 100%;
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
    <Container>
      <Form onSubmit={handleSubmit(submit)}>
        <GuideContainer>
          <Guide>Create New Account</Guide>
        </GuideContainer>

        <div>
          <Input placeholder="ID" type="text" {...register('username')} />
          <ErrorMsg>{errors.username?.message}</ErrorMsg>
        </div>

        <div>
          <Input placeholder="PW" type="password" {...register('password1')} />
          <ErrorMsg>{errors.username?.message}</ErrorMsg>
        </div>

        <div>
          <Input
            placeholder="PW 확인"
            type="password"
            {...register('password2')}
          />
          <ErrorMsg>{errors.password?.message}</ErrorMsg>
        </div>

        <div>
          <Input placeholder="닉네임" type="text" {...register('email')} />
          <ErrorMsg>{errors.username?.message}</ErrorMsg>
        </div>

        <div>
          <Input placeholder="홈그라운드" type="text" />
          <ErrorMsg>{errors.username?.message}</ErrorMsg>
        </div>

        <ButtonContainer>
          <Button disabled={isSubmitting}>
            {isSubmitting && 'Submitting...'}
            가입
          </Button>
        </ButtonContainer>

        {errors.apiError && <div>{errors.apiError?.message}</div>}
      </Form>
      <Img src={SignPic} />
    </Container>
  );
};

export default Register;
