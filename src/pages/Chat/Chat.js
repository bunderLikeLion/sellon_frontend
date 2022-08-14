import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import ChatLists from 'components/MyPage/Chat/ChatLists';
import InputMessage from 'components/MyPage/Chat/InputMessage';
import OnChatUserProfile from 'components/MyPage/Chat/OnChatUserProfile';
import { useDealingsQuery } from 'queries/dealing';

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

const ChatContentContainer = styled.div`
  height: 100%;
  padding: 1rem;
  overflow-y: scroll;
`;

const ChatBubble = styled.div`
  position: relative;
  background: #d6718f;
  border-radius: 0.4em;

  :after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 1.781em solid transparent;
    border-right-color: #d6718f;
    border-left: 0;
    border-top: 0;
    margin-top: -0.891em;
    margin-left: -1.781em;
  }
`;

const ChatBox = styled.div`
  padding: 0.5rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const OnChatContainerBottom = styled.div`
  height: 6rem;
  padding: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const Chat = () => {
  const { data: dealings, isSuccess: dealingsFetched } = useDealingsQuery();
  return (
    <WrapContainer>
      <AlignContainer>
        {dealingsFetched && (
          <ChatForm>
            <Chat_Left>
              <MessageTitle>진행중인 거래</MessageTitle>
              <ChatContainer>
                {dealings?.results.map((singleDeal) => {
                  return <ChatLists singleDeal={singleDeal} />;
                })}
              </ChatContainer>
            </Chat_Left>
            <Chat_Right>
              <OnChatContainer>
                <OnChatUserProfile />
              </OnChatContainer>
              <ChatContentContainer>
                <ChatBubble>trtr</ChatBubble>
                <ChatBox>
                  상대방:
                  거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다
                </ChatBox>
                <ChatBox>나: 네~</ChatBox>
              </ChatContentContainer>
              <OnChatContainerBottom>
                <InputMessage />
              </OnChatContainerBottom>
            </Chat_Right>
          </ChatForm>
        )}
      </AlignContainer>
    </WrapContainer>
  );
};

export default Chat;
