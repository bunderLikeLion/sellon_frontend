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
`;

const ChatInput = styled.textarea`
  display: flex;
  width: 70%;
  height: 2.5rem;
  resize: none;
  margin: 1rem;
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
  color: #fff;
  cursor: pointer;
`;

const InputMessage = ({ selectedDeal }) => {
  const [msgText, handleMsgText, resetMsgText] = useInput();

  const { mutate: createFunc } = useCreateMessageMutation();

  const submit = () => {
    if(!selectedDeal?.id) return;

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
        disabled={!selectedDeal?.id && 'disabled'}
      />
      <SendMessageIcon onClick={submit} />
    </ChatInputContainer>
  );
};

export default InputMessage;
