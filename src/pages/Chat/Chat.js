import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import ChatLists from 'components/MyPage/Chat/ChatLists';
import InputMessage from 'components/MyPage/Chat/InputMessage';
import OnChatUserProfile from 'components/MyPage/Chat/OnChatUserProfile';
import MyProfile from 'components/MyPage/Chat/MyProfile';
import ChatMessages from 'components/MyPage/Chat/ChatMessages';

const ChatForm = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

const Chat_Left = styled.div`
  width: 30%;
  background: lightgray;
  padding: 0.5rem;
`;

const Chat_Right = styled.div`
  width: 70%;
  background: white;
  position: relative;
`;

const ChatLine = styled.div`
  border: 1px solid grey;
  margin: 1rem;
`;

const MyProfileContainor = styled.div`
  height: 10%;
`;

const OnChatContainor = styled.div`
  height: 15%;
`;

const MessageTitle = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: black;
`;

const ChatContainor = styled.div`
  overflow-y: scroll;
  height: 75%;
`;

const Chat = () => {
  return (
    <WrapContainer>
      <ChatForm>
        <Chat_Left>
          <MyProfileContainor>
            <MyProfile />
            <ChatLine />
          </MyProfileContainor>
          <OnChatContainor>
            <OnChatUserProfile />
          </OnChatContainor>
          <MessageTitle>Messages</MessageTitle>
          <ChatContainor>
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
            <ChatLists />
          </ChatContainor>
        </Chat_Left>
        <Chat_Right>
          <ChatMessages />
          <InputMessage />
        </Chat_Right>
      </ChatForm>
    </WrapContainer>
  );
};

export default Chat;
