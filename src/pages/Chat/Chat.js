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
  align-items: center;
  width: 100%;
  height: 85vh;
`;

const ChatForm = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38rem;
  overflow: hidden;
`;

const Chat_Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48%;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const Chat_Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const OnChatContainer = styled.div`
  height: 15%;
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
  const { pk: userId } = useRecoilValue(userAtom);
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
                {dealings?.results.map((singleDeal) => {
                  return (
                    <ChatLists
                      singleDeal={singleDeal}
                      selectedDeal={selectedDeal}
                      handleEvaluationModal={handleEvaluationModal}
                      setSelectedDeal={setSelectedDeal}
                      opponent={opponent}
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
