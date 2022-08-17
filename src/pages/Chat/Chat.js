import WrapContainer from 'layouts/WrapContainer';
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

const AlignContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const ChatForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 38rem;
  overflow: hidden;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Chat_Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__primary};
  max-height: 30rem;

  @media screen and (max-width: 1000px) {
    max-height: 20rem;
  }
`;

const Chat_Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  border-radius: 0.5rem;
  max-height: 30rem;

  background: ${(props) => props.theme.color_background__primary};

  @media screen and (max-width: 1000px) {
    max-height: 30rem;
  }
`;

const OnChatContainer = styled.div`
`;

const MessageTitle = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85%;
  margin: 1rem 0;
  overflow-y: scroll;
`;

const OnChatContainerBottom = styled.div`
  height: 6rem;
  padding: 1rem;
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
  }, [selectedDeal]);

  return (
    <WrapContainer>
      <AlignContainer>
        {dealingsFetched && (
          <ChatForm>
            <Chat_Left>
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
            </Chat_Left>
            <Chat_Right>
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
            </Chat_Right>
          </ChatForm>
        )}
      </AlignContainer>
      <UserEvaluationModal
        handleEvaluationModal={handleEvaluationModal}
        isEvaluationModalOpened={isEvaluationModalOpened}
        selectedDeal={selectedDeal}
      />
    </WrapContainer>
  );
};

export default Chat;
