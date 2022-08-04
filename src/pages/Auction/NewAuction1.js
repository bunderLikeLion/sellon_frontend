import styled from 'styled-components';

const BigContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0rem auto;
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

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const InventoryBtn = styled.button`
  font-size: x-large;
  background-color: dimgrey;
  color: white;
  border-radius: 1rem;
  border: none;
  height: 5rem;
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

const NewAuction1 = () => {
  return (
    <BigContainer>
      <Container>
        <BtnContainer>
          <InventoryBtn>인벤토리에서 가져오기</InventoryBtn>
        </BtnContainer>
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

export default NewAuction1;
