import styled from 'styled-components';

const ChatMessageContinor = styled.div`
  margin: 5rem;
`;

const ChatMessage = styled.div`
  width: 25rem;
  height: 2rem;
  background: gray;
  border-radius: 1.5rem;
`;

const ChatMessages = () => {
  return (
    <ChatMessageContinor>
      <ChatMessage />
    </ChatMessageContinor>
  );
};

export default ChatMessages;
