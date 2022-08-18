import styled from 'styled-components';
import { useMessagesQuery } from 'queries/messages';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { useEffect, useRef } from 'react';

const ChatContentContainer = styled.div`
  height: 100%;
  padding: 1rem;
  overflow-y: auto;
  min-height: 15rem;
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

const EmptyChatPlaceHolder = styled.div`
  text-align: center;
`

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
      {msgDataFetched ? (
        msgData.length > 0 ? (
          msgData.map((singleMsg) => {
            if (singleMsg?.sender?.id === user?.id) {
              return <ChatBox>{singleMsg?.content}</ChatBox>;
            } else {
              return (
                <ChatBox>
                  {opponent?.username}: {singleMsg?.content}
                </ChatBox>
              );
            }
          })
        ) : (
          <EmptyChatPlaceHolder>
            <p>아직 나눈 대화가 없습니다.</p>
          </EmptyChatPlaceHolder>
          )
        ): (
          <EmptyChatPlaceHolder>
            <p>진행중인 거래 목록에서 거래를 선택하여<br/> 메세지를 보낼 수 있습니다.</p>
          </EmptyChatPlaceHolder>
          )
      }
    </ChatContentContainer>
  );
};

export default ChatMsgContainer;
