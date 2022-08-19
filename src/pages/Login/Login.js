import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { useLoginMutation } from 'queries/auth';
import styled from 'styled-components';
import SignPic from 'images/Sign_Img.jpeg';
import LoginPic from 'images/LoginPic.jpeg';
import toast from 'react-hot-toast';
import useInput from 'hooks/useInput';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;

  @media screen and (max-width: 1000px) {
    height: 70vh;
  }
`;

const Card = styled.div`
  display: flex;
  max-width: 90%;
  width: 60rem;
  height: 34rem;
  border: ${(props) => props.theme.color_border__topleft};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

//전체 컨테이너
const Form = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  align-content: center;
  gap: 3rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: 100%;
    gap: 2rem;
  }
`;

//상단 Log-In 글씨 컨테이너
const GuideContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const Guide = styled.h1`
  font-size: 2rem;
  font-weight: 600;
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
  flex-direction: column;
  justify-content: center;
`;

//개별 버튼
const Button = styled.button`
  width: 20rem;
  height: 3rem;
  margin: 0.4rem 0 0.7rem 0;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.3rem;
  font-weight: 500;
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__secondary};
  background-size: 300% 100%;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  :hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
      to right,
      #6253e1,
      #852d91,
      #a3a1ff,
      #6253e1
    );
    box-shadow: inset 0 4px 15px 0 rgba(126, 52, 161, 0.75);
  }
`;


const Img = styled.img`
  flex: 1;
  height: 100%;
  border-radius: 0 10px 10px 0;

  @media screen and (max-width: 1000px) {
    border-radius: 10px 10px 0 0;

    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: auto;
    max-height: 15rem;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Login = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const [username, handleUsername] = useInput('');
  const [password, handlePassword] = useInput('');

  useEffect(() => {
    if (user) {
      toast.success('이미 로그인한 상태입니다. 👍');
      navigate('/');
    }
    if (window.location.pathname.split('/').pop() === '1') {
      toast.error('해당 기능을 사용하려면 로그인을 해주세요 😭');
    }
  }, []);

  const { mutate: loginMutate } = useLoginMutation();

  const onKeyPressFunc = (e) => {
    if (e.key === 'Enter') submit();
  };

  const submit = () => {
    loginMutate({ username: username, password: password });
  };

  return (
    <Container>
      <Card>
        <Form>
          <GuideContainer>
            <Guide>로그인</Guide>
          </GuideContainer>
          <InputsContainer>
            <InputContainer>
              <Input
                placeholder="ID"
                type="text"
                value={username}
                onChange={handleUsername}
                onKeyPress={onKeyPressFunc}
              />
            </InputContainer>
            <InputContainer>
              <Input
                placeholder="PW"
                type="password"
                value={password}
                onChange={handlePassword}
                onKeyPress={onKeyPressFunc}
              />
            </InputContainer>
            <ButtonContainer>
              <Button onClick={submit}>로그인</Button>
              <Link to="/register">
                <RegisterLink>아직 계정이 없으십니까?</RegisterLink>
              </Link>
            </ButtonContainer>
          </InputsContainer>
        </Form>
        <Img src={LoginPic} />
      </Card>
    </Container>
  );
};

export default Login;
