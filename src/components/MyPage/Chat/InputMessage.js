import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import MyProfile from 'components/MyPage/Chat/MyProfile';
import useInput from 'hooks/useInput';
import { useCreateMessageMutation } from 'queries/messages';

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
  cursor: pointer;
`;

const InputMessage = ({ selectedDeal }) => {
  const [msgText, handleMsgText, resetMsgText] = useInput();

  const { mutate: createFunc } = useCreateMessageMutation();

  const submit = () => {
    createFunc({
      dealing_id: selectedDeal?.id,
      content: msgText,
    });
    resetMsgText();
  };

  const onKeyPressFunc = (e) => {
    if (e.key === 'Enter') submit();
  };

  return (
    <ChatInputContainer>
      <MyProfile />
      <ChatInput
        value={msgText}
        onChange={handleMsgText}
        onKeyPress={onKeyPressFunc}
      />
      <SendMessageIcon onClick={submit} />
    </ChatInputContainer>
  );
};

export default InputMessage;
