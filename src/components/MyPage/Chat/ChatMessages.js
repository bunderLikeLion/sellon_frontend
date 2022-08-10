import styled from 'styled-components';

const ChatMessageContainer = styled.div`
  margin: 5rem;
`;

const ChatMessage = styled.div`
  width: 25rem;
  height: 2rem;
  border-radius: 1.5rem;
`;

const ChatMessages = () => {
  return (
    <ChatMessageContainer>
      <ChatMessage />
    </ChatMessageContainer>
  );
};

export default ChatMessages;
