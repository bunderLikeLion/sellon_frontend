import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import MyProfile from 'components/MyPage/Chat/MyProfile';

const ChatInputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const ChatInput = styled.input`
  display: flex;
  width: 70%;
  height: 2rem;
  padding: 0 1rem;
  border: none;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_font__tertiary};
`;

const SendMessageIcon = styled(SendIcon)`
  width: 2rem;
  height: 2rem;
  margin: 0.3rem;
  color: #fff;
`;

const InputMessage = () => {
  return (
    <ChatInputContainer>
      <MyProfile />
      <ChatInput />
      <SendMessageIcon />
    </ChatInputContainer>
  );
};

export default InputMessage;
