import styled from 'styled-components';
import InterestedAuctionListCard from './InterestedAuctionListCard';
import { useInterestedAuctionsQuery } from 'queries/auction';
import isAuctionFinishedHandler from 'utils/isAuctionFinishedHandler';

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
            {interestedAuctionLists?.results.map((singleInterestedAuction) => {
              if (
                isAuctionFinishedHandler(
                  singleInterestedAuction?.auction?.end_at
                )
              ) {
                // 끝난 경매
                return (
                  <InterestedAuctionListCard
                    data={singleInterestedAuction.auction}
                    isFinished={true}
                  />
                );
              } else {
                // 진행중인 경매
                return (
                  <InterestedAuctionListCard
                    data={singleInterestedAuction.auction}
                    isFinished={false}
                  />
                );
              }
            })}
          </FlexContainer>
        </>
      )}
    </ItemListContainer>
  );
};

export default InterestedAuctionList;
