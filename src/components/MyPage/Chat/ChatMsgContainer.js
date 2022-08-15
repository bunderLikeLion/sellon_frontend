import styled from 'styled-components';
import { useMessagesQuery } from 'queries/messages';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { useEffect, useRef } from 'react';

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

const ChatMsgContainer = ({ opponent, selectedDeal }) => {
  const scrollRef = useRef();
  const user = useRecoilValue(userAtom);
  const { data: msgData, isSuccess: msgDataFetched } = useMessagesQuery(
    selectedDeal?.id
  );

  const scrollToBottom = () => {
    const scroll =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    scrollRef.current.scrollTo(0, scroll);
  };

  useEffect(() => {
    scrollToBottom();
  }, [msgData]);

  return (
    <ChatContentContainer ref={scrollRef}>
      {msgDataFetched &&
        msgData.map((singleMsg) => {
          if (singleMsg?.sender?.id === user?.pk) {
            return <ChatBox>{singleMsg?.content}</ChatBox>;
          } else {
            return (
              <ChatBox>
                {opponent?.username}: {singleMsg?.content}
              </ChatBox>
            );
          }
        })}
    </ChatContentContainer>
  );
};

export default ChatMsgContainer;
