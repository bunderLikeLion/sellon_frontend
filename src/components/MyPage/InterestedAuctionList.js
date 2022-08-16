import styled from 'styled-components';
import InterestedAuctionListCard from './InterestedAuctionListCard';
import { useInterestedAuctionsQuery } from 'queries/auction';
import isAuctionFinishedHandler from 'utils/isAuctionFinishedHandler';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { useMyProductsQuery } from 'queries/product';
import AuctionListContainer from 'components/Shared/AuctionListContainer';
import EmptyListPlaceHolder from 'components/Shared/EmptyListPlaceholder';

const FlexContainer = styled(AuctionListContainer)`
  margin-top: 2rem;
`;

const ItemListContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
`;

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    button {
      color: ${(props) => props.theme.color_font__secondary} !important;
    }
    .Mui-selected {
      color: ${(props) => props.theme.color_font__number} !important;
    }
  }
`;

const InterestedAuctionList = () => {
  const [pageNum, setPageNum] = useState(1);

  const {
    data: interestedAuctionLists,
    isSuccess: interestedAuctionListsFetched,
  } = useInterestedAuctionsQuery(pageNum);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <ItemListContainer>
      {interestedAuctionListsFetched && (
        <>
          <p>총 {interestedAuctionLists?.total_count}개</p>
          {
            interestedAuctionLists?.total_count > 0 ? (
              <FlexContainer>
                {interestedAuctionLists?.results.map((singleInterestedAuction) => (
                  <InterestedAuctionListCard
                    data={singleInterestedAuction.auction}
                    isFinished={isAuctionFinishedHandler(
                      singleInterestedAuction?.auction?.end_at
                    )}
                  />
                ))}
              </FlexContainer>
            ) : <EmptyListPlaceHolder message="아직 관심 경매로 등록한 경매가 없습니다. 😅" />
          }
        </>
      )}

      <PaginationContainer>
        <StyledPagination
          count={interestedAuctionLists?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
    </ItemListContainer>
  );
};

export default InterestedAuctionList;
