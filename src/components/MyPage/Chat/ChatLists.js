import styled from 'styled-components';
import { useState } from 'react';
import UserInfoDetailModal from './UserInfoDetailModal';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import ValidationModal from 'components/Shared/ValidationModal';
import detailDateFormatter from 'utils/detailDateFormatter';
import CardMedia from '@mui/material/CardMedia';

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

const UserProfileImg = styled(CardMedia)`
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

const ChatLists = ({
  singleDeal,
  handleEvaluationModal,
  selectedDeal,
  setSelectedDeal,
}) => {
  const { pk: userId } = useRecoilValue(userAtom);
  const [isDetailModalOpened, setIsDetailModalOpened] = useState(false);
  const [isValidationModalOpened, setIsValidationModalOpened] = useState(false);

  const handleDetailModal = () => setIsDetailModalOpened(!isDetailModalOpened);

  const handleValidationModal = () =>
    setIsValidationModalOpened(!isValidationModalOpened);

  return (
    <ChatMessageListContainer onClick={() => setSelectedDeal(singleDeal)}>
      <UserProfileImg
        image={
          singleDeal?.product_group?.user?.id === userId
            ? singleDeal?.auction?.owner?.avatar
            : singleDeal?.product_group?.user?.avatar
        }
      />
      <ChatMessageText>
        <UserNickname>
          {singleDeal?.product_group?.user?.id === userId
            ? singleDeal?.auction?.owner?.username
            : singleDeal?.product_group?.user?.username}
        </UserNickname>
        <ChatTimeContainer>
          <ChatTime>
            {singleDeal?.last_message_sent_at &&
              detailDateFormatter(singleDeal?.last_message_sent_at)}
          </ChatTime>
        </ChatTimeContainer>
        {singleDeal?.completed_at && <p>종료된 거래</p>}
        {singleDeal === selectedDeal && (
          <ChatButtonContainer>
            <ChatBoxButton onClick={handleDetailModal}>거래 보기</ChatBoxButton>
            {!singleDeal?.is_evaluated && (
              <ChatBoxButton onClick={handleEvaluationModal}>
                평가하기
              </ChatBoxButton>
            )}
            {!singleDeal?.completed_at && (
              <ChatBoxButton onClick={handleValidationModal}>
                거래 종료
              </ChatBoxButton>
            )}
          </ChatButtonContainer>
        )}
      </ChatMessageText>
      {/*거래 요약 묘달 (거래 보기)*/}
      <UserInfoDetailModal
        handleModal={handleDetailModal}
        isModalOpened={isDetailModalOpened}
        singleDeal={singleDeal}
      />
      {/*거래 종료 묘달 (거래 종료)*/}
      <ValidationModal
        handleModal={handleValidationModal}
        isModalOpened={isValidationModalOpened}
        mainText="정말 거래를 종료하시겠습니까?"
        btnText="거래 종료"
        relatedId={selectedDeal?.id}
        type="endDealing"
      />
    </ChatMessageListContainer>
  );
};

export default ChatLists;
