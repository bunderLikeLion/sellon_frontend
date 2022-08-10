import styled from 'styled-components';
import InterestedAuctionListCard from './InterestedAuctionListCard';
import InterestedAuctionListCardFinished from './InterestedAuctionListCardFinished';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: left;
`;

const ItemListContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
`;

const InterestedAuctionList = () => {
  return (
    <ItemListContainer>
      <p>총 3개</p>
      <FlexContainer>
        <InterestedAuctionListCardFinished />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
      </FlexContainer>
    </ItemListContainer>
  );
};

export default InterestedAuctionList;
