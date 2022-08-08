import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  clear: both;
  padding: 1rem;
  width: auto;
  height: 100%;
`;

const TitleContainer = styled.div``;

const SubHeader = styled.p`
  width: 6rem;
  margin: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
`;

const AuctionTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem;
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
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_font__secondary};
  overflow-y: scroll;

  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
`;

const DetailSubHeader = styled.p`
  font-weight: 700;
  font-size: 1rem;
  margin: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const AuctionDetail = styled.div`
  font-size: 1rem;
  width: 5rem;
  margin: 1rem 2rem;
  text-align: center;
  color: ${(props) => props.theme.color_font__secondary};
`;

const AuctionDetailContainers = styled.div`
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemDetailContainer = () => {
  return (
    <Container>
      <TitleContainer>
        <SubHeader>경매 제목</SubHeader>
        <AuctionTitle>나이키 신발 사세요!</AuctionTitle>
      </TitleContainer>

      <TextareaContainer>
        <SubHeader>경매 내용</SubHeader>
        <AuctionInfoContainer>
          이 신발은 제가 직접 영국에서 공수해온 것으로 매우 훌륭한 천으로
          제작되었습니다.
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
