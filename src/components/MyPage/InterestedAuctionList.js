import styled from 'styled-components';
import InterestedAuctionListCard from './InterestedAuctionListCard';
import InterestedAuctionListCardFinished from './InterestedAuctionListCardFinished';
import { useInterestedAuctionsQuery } from 'queries/auction';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  margin-top: 3rem;
`;

const ItemListContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
`;

const InterestedAuctionList = () => {
  const {
    data: interestedAuctionLists,
    isSuccess: interestedAuctionListsFetched,
  } = useInterestedAuctionsQuery();

  return (
    <ItemListContainer>
      {interestedAuctionListsFetched && (
        <>
          <p>총 {interestedAuctionLists?.total_count}개</p>
          <FlexContainer>
            <InterestedAuctionListCardFinished />
            <InterestedAuctionListCard />
            <InterestedAuctionListCard />
            <InterestedAuctionListCard />
            <InterestedAuctionListCard />
            <InterestedAuctionListCard />
          </FlexContainer>
        </>
      )}
    </ItemListContainer>
  );
};

export default InterestedAuctionList;
