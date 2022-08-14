import styled from 'styled-components';
import UserEvaluationModal from './UserEvaluationModal';
import { useState } from 'react';
import UserInfoDetailModal from './UserInfoDetailModal';

const ChatMessageListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
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

const ChatLists = ({ singleDeal, handleEvaluationModal, selectedDeal }) => {
  const [isDetailModalOpened, setIsDetailModalOpened] = useState(false);
  const handleDetailModal = () => setIsDetailModalOpened(!isDetailModalOpened);
  console.log(singleDeal, selectedDeal, 'asdasdasas');
  return (
    <ChatMessageListContainer onClick={() => console.log(123)}>
      <UserProfileImg />
      <ChatMessageText>
        <UserNickname>{singleDeal?.product_group?.user?.username}</UserNickname>
        <ChatTimeContainer>
          <ChatTime>시간</ChatTime>
        </ChatTimeContainer>
        {singleDeal === selectedDeal && (
          <ChatButtonContainer>
            <ChatBoxButton onClick={handleDetailModal}>거래 보기</ChatBoxButton>
            <UserInfoDetailModal
              handleModal={handleDetailModal}
              isModalOpened={isDetailModalOpened}
            />
            <ChatBoxButton onClick={handleEvaluationModal}>
              거래종료
            </ChatBoxButton>
          </ChatButtonContainer>
        )}
      </ChatMessageText>
    </ChatMessageListContainer>
  );
};

export default ChatLists;
