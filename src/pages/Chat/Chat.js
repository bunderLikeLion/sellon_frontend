import styled from 'styled-components';
import ChatLists from 'components/MyPage/Chat/ChatLists';
import InputMessage from 'components/MyPage/Chat/InputMessage';
import OnChatUserProfile from 'components/MyPage/Chat/OnChatUserProfile';
import { useDealingsQuery } from 'queries/dealing';
import { useEffect, useState } from 'react';
import UserEvaluationModal from 'components/MyPage/Chat/UserEvaluationModal';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import ChatMsgContainer from 'components/MyPage/Chat/ChatMsgContainer';

const StyledWrapContainer = styled.div`
  height: fit-content;
`;

const AlignContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
`;

const ChatForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 38rem;
  overflow: hidden;
  gap: 3rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ChatLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 27rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__primary};
  max-height: 35rem;

  @media screen and (max-width: 1000px) {
    max-height: 20rem;
  }
`;

const ChatRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  max-width: 27rem;
  border-radius: 0.5rem;
  max-height: 35rem;

  background: ${(props) => props.theme.color_background__primary};

  @media screen and (max-width: 1000px) {
    max-height: 30rem;
  }
`;

const OnChatContainer = styled.div``;

const MessageTitle = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 29.3rem;
  margin: 1rem 0;
  overflow-y: auto;

  gap: 1rem;
`;
//height: 85%;

const OnChatContainerBottom = styled.div`
  height: 6rem;
  padding: 0 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const Chat = () => {
  const { id: userId } = useRecoilValue(userAtom);
  const { data: dealings, isSuccess: dealingsFetched } = useDealingsQuery();
  const [selectedDeal, setSelectedDeal] = useState({});
  const [isEvaluationModalOpened, SetIsEvaluationModalOpened] = useState(false);
  const [opponent, setOpponent] = useState(null);
  const handleEvaluationModal = () =>
    SetIsEvaluationModalOpened(!isEvaluationModalOpened);

  useEffect(() => {
    // 누를때 상대 정하기
    if (selectedDeal?.product_group?.user?.id === userId) {
      setOpponent(selectedDeal?.auction?.owner);
    } else {
      setOpponent(selectedDeal?.product_group?.user);
    }
  }, [selectedDeal, userId]);

  return (
    <StyledWrapContainer>
      <AlignContainer>
        {dealingsFetched && (
          <ChatForm>
            <ChatLeft>
              <MessageTitle>진행중인 거래</MessageTitle>
              <ChatContainer>
                {dealings?.map((singleDeal) => {
                  return (
                    <ChatLists
                      singleDeal={singleDeal}
                      selectedDeal={selectedDeal}
                      handleEvaluationModal={handleEvaluationModal}
                      setSelectedDeal={setSelectedDeal}
                    />
                  );
                })}
              </ChatContainer>
            </ChatLeft>
            <ChatRight>
              <OnChatContainer>
                <OnChatUserProfile opponent={opponent} />
              </OnChatContainer>
              <ChatMsgContainer
                opponent={opponent}
                selectedDeal={selectedDeal}
              />
              <OnChatContainerBottom>
                <InputMessage selectedDeal={selectedDeal} />
              </OnChatContainerBottom>
            </ChatRight>
          </ChatForm>
        )}
      </AlignContainer>
      <UserEvaluationModal
        handleEvaluationModal={handleEvaluationModal}
        isEvaluationModalOpened={isEvaluationModalOpened}
        selectedDeal={selectedDeal}
        opponent={opponent}
      />
    </StyledWrapContainer>
  );
};

export default Chat;
