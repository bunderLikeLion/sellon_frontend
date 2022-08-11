import styled from 'styled-components';
import UserEvaluationModal from './UserEvaluationModal';
import { useState } from 'react';

const ChatMessageListContainor = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  display: flex;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
  justify-content: space-between;
`;

const UserProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: red;
  margin: auto;
`;

const ChatMessageText = styled.div`
  display: block;
  width: 75%;
  margin: 0.5rem;
`;

const UserNickname = styled.div`
  color: ${(props) => props.theme.color_font__secondary};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ChatTimeContainor = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`;

const ChatTime = styled.div`
  color: ${(props) => props.theme.color_font__tertiary};
`;

const ChatButtonContainer = styled.div`
  display: flex;
  height: 2.5rem;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ChatBoxButton = styled.button`
  margin-left: 0.5rem;
  background: ${(props) => props.theme.color_button__ok};
  border: none;
  border-radius: 0.7rem;
  height: 2rem;
  width: 6rem;
  font-weight: 700;
`;

const ChatLists = (props) => {
  const [isButtonOpened, setIsButtonOpened] = useState(false);
  const handleButton = () => setIsButtonOpened(!isButtonOpened);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  return (
    <ChatMessageListContainor>
      <UserProfileImg />
      <ChatMessageText>
        <UserNickname>상대 닉네임</UserNickname>
        <ChatTimeContainor>
          <ChatTime>2022.08.06</ChatTime>
        </ChatTimeContainor>
        <ChatButtonContainer>
          <ChatBoxButton>상세보기</ChatBoxButton>
          <ChatBoxButton onClick={handleModal}>평가하기</ChatBoxButton>
          <UserEvaluationModal
        handleModal={handleModal}
        isModalOpened={isModalOpened}
      />
        </ChatButtonContainer>
      </ChatMessageText>
    </ChatMessageListContainor>
  );
};

export default ChatLists;
