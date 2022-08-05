import styled from 'styled-components';

const BigContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #121212;
  color: white;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 38rem;
  margin: 1rem;
  padding: 1.5rem 0.5rem;
  background-color: grey;
  position: relative;
`;

const Button = styled.button`
  margin: 1rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
  height: 3rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

const ItemImage = styled.div`
  width: 70%;
  height: 100%;
  float: left;
  margin: 0 auto;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemExtraImage = styled.div`
  width: 20%;
  margin: 1rem;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 15rem;
  margin: 1rem;
  clear: both;
`;

const ItemExtraImageContainer = styled.div`
  height: 8rem;
  float: left;
  clear: both;
  display: flex;
  justify-content: center;
`;

const ItemDetailInformationContainer = styled.div`
  margin: 1rem;
`;

const ItemDetailTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ContentText = styled.p`
  margin: 0.5rem;
`;

const SubHeader = styled.p`
  margin: 0.5rem;
  margin-left: 0;
`;

const AuctionTitleContainer = styled.div`
  clear: both;
  margin: 2rem 1rem;
`;

const AuctionTitle = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 100%;
`;

const TextareaContainer = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const AuctionText = styled.textarea`
  height: 10rem;
`;

const AuctionPeriodContainer = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const AuctionPeriod = styled.div`
  display: flex;
`;

const AuctionPeriodInput = styled.input.attrs((props) => ({
  type: 'datetime-local',
}))``;

const TradeTypeContainer = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
`;

const Radio = styled.input.attrs((props) => ({ type: 'radio' }))`
  & {
    margin-left: 1rem;
  }
  &:checked {
    accent-color: black;
  }
`;

const ItemDetailInformation = styled.div`
  background-color: darkgrey;
  padding: 1rem;
`;

const ItemDetailText = styled.div`
  background-color: darkgrey;
  height: 8rem;
  clear: both;
  padding: 1rem;
  margin: 1rem;
  overflow: scroll;
`;

const NewAuction2 = () => {
  return (
    <BigContainer>
      <Container>
        <ItemImageContainer>
          <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
          <ItemExtraImageContainer>
            <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
          </ItemExtraImageContainer>
        </ItemImageContainer>

        <ItemDetailInformationContainer>
          <ItemDetailTitle>나이키 덩크 로우</ItemDetailTitle>
          <ItemDetailInformation>
            <ContentText>개수 : 1개</ContentText>
            <ContentText>상태 : 좋음</ContentText>
            <ContentText>카테고리 : 스포츠</ContentText>
          </ItemDetailInformation>
        </ItemDetailInformationContainer>
        <ItemDetailText>아끼는 신발 입니다.</ItemDetailText>
      </Container>

      <Container>
        <AuctionTitleContainer>
          <SubHeader>경매글 제목</SubHeader>
          <AuctionTitle></AuctionTitle>
        </AuctionTitleContainer>

        <TextareaContainer>
          <SubHeader>경매글 내용</SubHeader>
          <AuctionText>어쩌구저쩌구</AuctionText>
        </TextareaContainer>

        <AuctionPeriodContainer>
          <AuctionPeriod>
            <SubHeader>시작 시각</SubHeader>
            <AuctionPeriodInput />
          </AuctionPeriod>
          <AuctionPeriod>
            <SubHeader>종료 시각</SubHeader>
            <AuctionPeriodInput />
          </AuctionPeriod>
        </AuctionPeriodContainer>

        <TradeTypeContainer>
          <SubHeader>거래 방법</SubHeader>
          <Radio name="trade-type" value="All" /> 전체
          <Radio name="trade-type" value="meeting" /> 직거래
          <Radio name="trade-type" value="delivery" /> 택배
        </TradeTypeContainer>
        <Button>경매 발행하기</Button>
      </Container>
    </BigContainer>
  );
};

export default NewAuction2;
