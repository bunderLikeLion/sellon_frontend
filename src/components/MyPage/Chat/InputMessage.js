import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import MyProfile from 'components/MyPage/Chat/MyProfile';

const ChatInputContainor = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ChatInput = styled.input`
  width: 70%;
  height: 2rem;
  padding: 0 1rem;
  background: ${(props) => props.theme.color_font__tertiary};
  border: none;
  border-radius: 1rem;
  display: flex;
`;

const SendMessageIcon = styled(SendIcon)`
  width: 2rem;
  height: 2rem;
  color: white;
  margin: 0.3rem;
`;

const InputMessage = () => {
  return (
    <ChatInputContainor>
      <MyProfile />
      <ChatInput />
      <SendMessageIcon />
    </ChatInputContainor>
  );
};

export default InputMessage;
