import styled from 'styled-components';

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

const ChatMsgContainer = ({ opponent }) => {
  return (
    <ChatContentContainer>
      <ChatBubble>trtr</ChatBubble>
      <ChatBox>
        상대방:
        거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다거래합시다
      </ChatBox>
      <ChatBox>나: 네~</ChatBox>
    </ChatContentContainer>
  );
};

export default ChatMsgContainer;
