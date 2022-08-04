import styled from 'styled-components';

const ChatMessageListContainor = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
`;

const UserProfileImg = styled.div`
  width: 3rem;
  height: 2rem;
  border-radius: 50%;
  background: red;
  margin: 1.5rem;
`;

const ChatMessageText = styled.div`
  display: block;
  width: 100%;
  margin: 1rem;
`;

const UserNickname = styled.div`
  margin-bottom: 1rem;
`;

const LastMessageContainor = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`;

const LastMessage = styled.div``;

const UnreadMessage = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatLists = () => {
  return (
    <ChatMessageListContainor>
      <UserProfileImg />
      <ChatMessageText>
        <UserNickname>상대 아이디</UserNickname>
        <LastMessageContainor>
          <LastMessage>마지막 메시지</LastMessage>
          <UnreadMessage>
            <p>1</p>
          </UnreadMessage>
        </LastMessageContainor>
      </ChatMessageText>
    </ChatMessageListContainor>
  );
};

export default ChatLists;
