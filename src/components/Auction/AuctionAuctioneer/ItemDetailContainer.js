import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  clear: both;
  width: auto;
  height: 100%;
  padding: 1rem;
`;

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuctionInfoContainer = styled.div`
  width: 100%;
  height: 8rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__secondary};
  color: ${(props) => props.theme.color_font__secondary};
  overflow-y: scroll;

  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
`;

const AuctionDetailInfo = styled.div`
  margin: 1.2rem;
  line-height: 1.2rem;
`;

const DetailSubHeader = styled.p`
  width: 10rem;
  margin: 1.2rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const AuctionDetail = styled.div`
  width: 100%;
  margin: 1rem 2rem;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const AuctionDetailContainers = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  margin-top: 1rem;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const ItemDetailContainer = () => {
  return (
    <Container>
      <AuctionDetailContainers>
        <DetailSubHeader>경매 제목</DetailSubHeader>
        <AuctionDetail>나이키 신발 사세요!</AuctionDetail>
      </AuctionDetailContainers>

      <TextareaContainer>
        <AuctionInfoContainer>
          <DetailSubHeader>경매 내용</DetailSubHeader>
          <AuctionDetailInfo>
            이 신발은 제가 직접 영국에서 공수해온 것으로 매우 훌륭한 천으로
            제작되었습니다.
          </AuctionDetailInfo>
        </AuctionInfoContainer>
      </TextareaContainer>

      <AuctionDetailContainers>
        <DetailSubHeader>경매 기간</DetailSubHeader>
        <AuctionDetail>일주일</AuctionDetail>
      </AuctionDetailContainers>
      <AuctionDetailContainers>
        <DetailSubHeader>거래 방법</DetailSubHeader>
        <AuctionDetail>택배</AuctionDetail>
      </AuctionDetailContainers>
    </Container>
  );
};

export default ItemDetailContainer;
