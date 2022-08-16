import styled from 'styled-components';
import { queryClient } from 'index';
import timeLimitHandler from 'utils/timeLimitHandler';
import dealingTypeHandler from 'utils/dealingTypeHandler';

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
  overflow-y: scroll;
  width: 100%;
  height: 12rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__secondary};
  color: ${(props) => props.theme.color_font__secondary};
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

const ItemDetailContainer = ({ singleAuctionData }) => {
  // const auctionData = queryClient.getQueryData(['auctionInfo']);
  console.log(singleAuctionData, 'Oahjsdbajksd');

  return (
    <Container>
      <>
        <AuctionDetailContainers>
          <DetailSubHeader>경매 제목</DetailSubHeader>
          <AuctionDetail>{singleAuctionData?.title}</AuctionDetail>
        </AuctionDetailContainers>

        <TextareaContainer>
          <AuctionInfoContainer>
            <DetailSubHeader>경매 내용</DetailSubHeader>
            <AuctionDetailInfo>
              {singleAuctionData?.description}
            </AuctionDetailInfo>
          </AuctionInfoContainer>
        </TextareaContainer>

        <AuctionDetailContainers>
          <DetailSubHeader>종료 시점</DetailSubHeader>
          <AuctionDetail>
            {timeLimitHandler(singleAuctionData?.end_at)}
            {/*{timeLimitHandler(auctionData?.end_at)}*/}
          </AuctionDetail>
        </AuctionDetailContainers>
        <AuctionDetailContainers>
          <DetailSubHeader>거래 방법</DetailSubHeader>
          <AuctionDetail>
            {dealingTypeHandler(singleAuctionData?.dealing_type)}
          </AuctionDetail>
        </AuctionDetailContainers>
      </>
    </Container>
  );
};

export default ItemDetailContainer;
