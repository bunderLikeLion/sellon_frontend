import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { useSignInMutation } from 'queries/auth';
import styled from 'styled-components';
import LoginPic from 'images/LoginPic.jpeg';
import toast from 'react-hot-toast';
import useInput from 'hooks/useInput';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
`;

const Card = styled.div`
  display: flex;
  max-width: 90%;
  width: 60rem;
  height: 34rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const Form = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  align-content: center;
  gap: 4rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: 100%;
    gap: 2rem;
  }
`;

const GuideContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const Guide = styled.h1`
  font-size: 1.7rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
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

const Register = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const [username, handleUsername] = useInput('');
  const [email, handleEmail] = useInput('');
  const [password1, handlePassword1] = useInput('');
  const [password2, handlePassword2] = useInput('');

  useEffect(() => {
    if (user) {
      toast.success('이미 로그인한 상태입니다. 👍');
      navigate('/');
    }
  }, []);

  const { mutate: signInMutate } = useSignInMutation();

  const onKeyPressFunc = (e) => {
    if (e.key === 'Enter') submit();
  };

  const submit = () => {
    signInMutate({
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    });
  };

  return (
    <Container>
      <Card>
        <Form>
          <GuideContainer>
            <Guide>회원가입</Guide>
          </GuideContainer>
          <InputsContainer>
            <InputContainer>
              <Input
                placeholder="아이디"
                type="text"
                value={username}
                onChange={handleUsername}
                onKeyPress={onKeyPressFunc}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="이메일"
                type="email"
                value={email}
                onChange={handleEmail}
                onKeyPress={onKeyPressFunc}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="비밀번호"
                type="password"
                value={password1}
                onChange={handlePassword1}
                onKeyPress={onKeyPressFunc}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="비밀번호 확인"
                type="password"
                value={password2}
                onChange={handlePassword2}
                onKeyPress={onKeyPressFunc}
              />
            </InputContainer>

            <ButtonContainer>
              <Button onClick={submit}>가입</Button>
            </ButtonContainer>
          </InputsContainer>
        </Form>
        <Img src={LoginPic} />
      </Card>
    </Container>
  );
};

export default Register;
