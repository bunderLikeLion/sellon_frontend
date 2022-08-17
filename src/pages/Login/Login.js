import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import loginValidation from 'validations/loginValidation';
import { useLoginMutation } from 'queries/auth';
import styled from 'styled-components';
import SignPic from 'images/Sign_Img.jpeg';
import toast from 'react-hot-toast';

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
  border: ${(props) => props.theme.color_border__topleft};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;

//전체 컨테이너
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  height: 80%;
  margin-top: 7%;
`;

//상단 Log-In 글씨 컨테이너
const GuideContainer = styled.div`
  width: 70%;
  margin-bottom: 2rem;
`;

const Guide = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 4rem;
`;

//입력 폼
const Input = styled.input`
  width: 20rem;
  height: 4rem;
  padding: 1.2rem;
  border: none;
  border-radius: 0.5rem;
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
  width: 40%;
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
    if (user) {
      toast.success('이미 로그인한 상태입니다. 👍');
      navigate('/');
    }
    if (window.location.pathname.split('/').pop() === '1') {
      toast.error('해당 기능을 사용하려면 로그인을 해주세요 😭');
    }
  }, []);

  const { register, handleSubmit, formState } = useForm(loginValidation);

  const { errors, isSubmitting } = formState;

  const { mutate: loginMutate } = useLoginMutation();

  const submit = (inputData) => {
    loginMutate(inputData);
  };

  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit(submit)}>
          <GuideContainer>
            <Guide>로그인</Guide>
          </GuideContainer>
          <InputContainer>
            <Input placeholder="ID" type="text" {...register('username')} />
            <ErrorMsg>{errors.username?.message}</ErrorMsg>
          </InputContainer>
          <InputContainer>
            <Input placeholder="PW" type="password" {...register('password')} />
            <ErrorMsg>{errors.password?.message}</ErrorMsg>
          </InputContainer>
          <ButtonContainer>
            <Button disabled={isSubmitting}>
              {isSubmitting && 'Submitting...'}
              로그인
            </Button>
            {errors.apiError && <div>{errors.apiError?.message}</div>}
            <Link to="/register">
              <Button>회원가입</Button>
            </Link>
          </ButtonContainer>
        </Form>
        <Img src={SignPic} />
      </Card>
    </Container>
  );
};

export default Login;
