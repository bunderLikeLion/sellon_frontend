import styled from 'styled-components';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SendIcon from '@mui/icons-material/Send';

const ChatInputContainor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatInput = styled.div`
  width: 80%;
  height: 2.2rem;
  background: gray;
  border-radius: 1rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: start;
`;

const MyprofileImgOnChat = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: white;
  margin: 0.3rem 1.5rem;
`;

const PhotoIcon = styled(InsertPhotoIcon)`
  width: 2rem;
  height: 2rem;
  color: white;
  position: absolute;
  right: 7%;
  margin: 0.3rem;
`;

const SendMessageIcon = styled(SendIcon)`
  width: 2rem;
  height: 2rem;
  color: white;
  position: absolute;
  right: 2%;
  margin: 0.3rem;
`;

const InputMessage = () => {
  return (
    <ChatInputContainor>
      <ChatInput>
        <MyprofileImgOnChat />
        <PhotoIcon />
        <SendMessageIcon />
      </ChatInput>
    </ChatInputContainor>
  );
};

export default InputMessage;
