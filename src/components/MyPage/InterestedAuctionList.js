import styled from 'styled-components';
import InterestedAuctionListCard from './InterestedAuctionListCard';
import { useInterestedAuctionsQuery } from 'queries/auction';
import isAuctionFinishedHandler from 'utils/isAuctionFinishedHandler';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { useMyProductsQuery } from 'queries/product';


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
  const {
    data: interestedAuctionLists,
    isSuccess: interestedAuctionListsFetched,
  } = useInterestedAuctionsQuery();

  const [pageNum, setPageNum] = useState(1);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum, 6);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

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

      <PaginationContainer>
        <StyledPagination
          count={myProductsData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>

    </ItemListContainer>
  );
};

export default InterestedAuctionList;