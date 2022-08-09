import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import loginValidation from 'validations/loginValidation';
import useLoginMutation from 'queries/auth/useLoginMutation';
import styled from 'styled-components';
import SignPic from 'images/Sign_Img.jpeg';

const Card = styled.div`
  position: absolute;
  top: 17%;
  left: 15%;
  width: 70%;
  height: 70vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;

//전체 컨테이너
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  height: 27rem;
  margin-top: 7%;
`;

//상단 Log-In 글씨 컨테이너
const GuideContainer = styled.div`
  width: 60%;
  margin-bottom: 2rem;
`;

const Guide = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

//입력 폼
const Input = styled.input`
  width: 20rem;
  height: 4rem;
  border: none;
  border-radius: 0.5rem;
  margin-left: 1rem;
  padding: 1.2rem;
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

//하단 에러 메세지
const ErrorMsg = styled.div`
  margin: 1rem 0 0.5rem 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

//버튼 전체 컨테이너
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  margin: 1rem 9rem 0 0;
`;

//개별 버튼
const Button = styled.button`
  width: 8.4rem;
  height: 2.6rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__secondary};
  :last-child {
    background: ${(props) => props.theme.color_button__ok};
    color: ${(props) => props.theme.color_buttontext__ok};
  }
`;

const Img = styled.img`
  width: 50%;
  height: 100%;
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
    <Card>
      <Container>
        <Form onSubmit={handleSubmit(submit)}>
          <GuideContainer>
            <Guide>Log-In</Guide>
          </GuideContainer>
          <div>
            <Input placeholder="ID" type="text" {...register('username')} />
            <ErrorMsg>{errors.username?.message}</ErrorMsg>
          </div>
          <div>
            <Input placeholder="PW" type="password" {...register('password')} />
            <ErrorMsg>{errors.password?.message}</ErrorMsg>
          </div>
          <ButtonContainer>
            <Button disabled={isSubmitting}>
              {isSubmitting && 'Submitting...'}
              Sign In
            </Button>
            {errors.apiError && <div>{errors.apiError?.message}</div>}
            <Link to="/register">
              <Button>회원가입</Button>
            </Link>
          </ButtonContainer>
        </Form>
        <Img src={SignPic} />
      </Container>
    </Card>
  );
};

export default Login;
