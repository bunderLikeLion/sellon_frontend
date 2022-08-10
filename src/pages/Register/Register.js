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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
`;

const Card = styled.div`
  display: flex;
  width: 60rem;
  height: 34rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80%;
  margin-top: 7%;
`;

const GuideContainer = styled.div`
  width: 65%;
  margin-bottom: 2.5rem;
`;

const Guide = styled.h1`
  font-size: 1.7rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  height: 4rem;
`;

const Input = styled.input`
  width: 20rem;
  height: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  opacity: 70%;
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_font__secondary};
  ::placeholder {
    font-size: 1.2rem;
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
  width: 65%;
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 8.4rem;
  height: 2.6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.3rem;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__success};
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
      <Card>
        <Form onSubmit={handleSubmit(submit)}>
          <GuideContainer>
            <Guide>Create New Account</Guide>
          </GuideContainer>

          <InputContainer>
            <Input placeholder="ID" type="text" {...register('username')} />
            <ErrorMsg>{errors.username?.message}</ErrorMsg>
          </InputContainer>

          <InputContainer>
            <Input
              placeholder="PW"
              type="password"
              {...register('password1')}
            />
            <ErrorMsg>{errors.username?.message}</ErrorMsg>
          </InputContainer>

          <InputContainer>
            <Input
              placeholder="PW 확인"
              type="password"
              {...register('password2')}
            />
            <ErrorMsg>{errors.password?.message}</ErrorMsg>
          </InputContainer>

          <InputContainer>
            <Input placeholder="이메일" type="text" {...register('email')} />
            <ErrorMsg>{errors.username?.message}</ErrorMsg>
          </InputContainer>

          <InputContainer>
            <Input placeholder="홈그라운드" type="text" />
            <ErrorMsg>{errors.username?.message}</ErrorMsg>
          </InputContainer>

          <ButtonContainer>
            <Button disabled={isSubmitting}>
              {isSubmitting && 'Submitting...'}
              가입
            </Button>
          </ButtonContainer>

          {errors.apiError && <div>{errors.apiError?.message}</div>}
        </Form>
        <Img src={SignPic} />
      </Card>
    </Container>
  );
};

export default Register;
