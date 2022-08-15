import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import MyProfile from 'components/MyPage/Chat/MyProfile';
import useInput from 'hooks/useInput';

const ChatInputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 6rem;
  padding: 0 0 2rem 0;
`;

const ChatInput = styled.textarea`
  display: flex;
  width: 80%;
  height: 4rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_font__tertiary};
`;

const SendMessageIcon = styled(SendIcon)`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  color: #fff;
`;

const InputMessage = () => {
  const [msgText, handleMsgText, resetMsgText] = useInput();

  return (
    <ChatInputContainer>
      <MyProfile />
      <ChatInput value={msgText} onChange={handleMsgText} />
      <SendMessageIcon />
    </ChatInputContainer>
  );
};

export default InputMessage;
