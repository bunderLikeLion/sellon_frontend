import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import ChatLists from 'components/MyPage/Chat/ChatLists';
import InputMessage from 'components/MyPage/Chat/InputMessage';
import OnChatUserProfile from 'components/MyPage/Chat/OnChatUserProfile';

const ChatForm = styled.div`
  display: flex;
  justify-content: space-around;
  height: 42rem;
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
  return (
    <WrapContainer>
      <ChatForm>
        <Chat_Left>
          <MessageTitle>진행중인 거래</MessageTitle>
          <ChatContainer>
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
          </ChatContainer>
        </Chat_Left>
        <Chat_Right>
          <OnChatContainer>
            <OnChatUserProfile />
          </OnChatContainer>
          <ChatContentContainer>
            <ChatBox>
              상대방:
              거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다
            </ChatBox>
            <ChatBox>나: 네~</ChatBox>
            <ChatBox>
              상대방:
              거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다
            </ChatBox>
            <ChatBox>나: 네~</ChatBox>
            <ChatBox>
              상대방:
              거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다
            </ChatBox>
            <ChatBox>나: 네~</ChatBox>
            <ChatBox>
              상대방:
              거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다
            </ChatBox>
            <ChatBox>나: 네~</ChatBox>
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
    </WrapContainer>
  );
};

export default Chat;
