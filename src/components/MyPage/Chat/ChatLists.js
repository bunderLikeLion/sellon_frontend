import styled from 'styled-components';
import UserEvaluationModal from './UserEvaluationModal';
import { useState } from 'react';

const ChatMessageListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const UserProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  margin: auto;
  border-radius: 50%;
  background: #f00;
`;

const ChatMessageText = styled.div`
  width: 75%;
  margin: 0.5rem;
`;

const UserNickname = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ChatTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`;

const ChatTime = styled.div`
  color: ${(props) => props.theme.color_font__tertiary};
`;

const ChatButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 2.5rem;
`;

const ChatBoxButton = styled.button`
  height: 2rem;
  width: 6rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 0.7rem;
  font-weight: 700;
  background: ${(props) => props.theme.color_button__ok};
`;

const ChatLists = (props) => {
  const [isButtonOpened, setIsButtonOpened] = useState(false);
  const handleButton = () => setIsButtonOpened(!isButtonOpened);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  return (
    <ChatMessageListContainer>
      <UserProfileImg />
      <ChatMessageText>
        <UserNickname>상대 닉네임</UserNickname>
        <ChatTimeContainer>
          <ChatTime>2022.08.06</ChatTime>
        </ChatTimeContainer>
        <ChatButtonContainer>
          <ChatBoxButton>상세보기</ChatBoxButton>
          <ChatBoxButton onClick={handleModal}>평가하기</ChatBoxButton>
          <UserEvaluationModal
        handleModal={handleModal}
        isModalOpened={isModalOpened}
      />
        </ChatButtonContainer>
      </ChatMessageText>
    </ChatMessageListContainer>
  );
};

export default ChatLists;
