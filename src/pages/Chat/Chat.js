import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import ChatLists from 'components/MyPage/Chat/ChatLists';
import InputMessage from 'components/MyPage/Chat/InputMessage';
import OnChatUserProfile from 'components/MyPage/Chat/OnChatUserProfile';

const ChatForm = styled.div`
  display: flex;
  height: 42rem;
  overflow: hidden;
  justify-content: space-around;
`;

const Chat_Left = styled.div`
  width: 48%;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__primary};
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Chat_Right = styled.div`
  width: 48%;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__primary};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OnChatContainor = styled.div`
  height: 15%;
`;

const MessageTitle = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ChatContainor = styled.div`
  overflow-y: scroll;
  height: 85%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChatContentContainer = styled.div`
  height: 100%;
  padding: 1rem;
  overflow-y: scroll;
`;

const ChatBox = styled.div`
  color: ${(props) => props.theme.color_font__secondary};
  padding: 0.5rem;
  line-height: 1.5rem;
`;

const OnChatContainerBottom = styled.div`
  height: 6rem;
  background: ${(props) => props.theme.color_background__secondary};
  position: relative;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 1rem;
  align-items: center;
`;

const Chat = () => {
  return (
    <WrapContainer>
      <ChatForm>
        <Chat_Left>
          <MessageTitle>진행중인 거래</MessageTitle>
          <ChatContainor>
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
          </ChatContainor>
        </Chat_Left>
        <Chat_Right>
          <OnChatContainor>
            <OnChatUserProfile />
          </OnChatContainor>
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
