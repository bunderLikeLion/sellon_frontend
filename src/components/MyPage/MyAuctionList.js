import styled from 'styled-components';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import AuctionListContainer from 'components/Shared/AuctionListContainer';
import AuctionListItem from 'components/Shared/AuctionListItem';
import { useMyAuctionQuery } from 'queries/auction';
import timeLimitHandler from 'utils/timeLimitHandler';
import isAuctionFinishedHandler from 'utils/isAuctionFinishedHandler';
import dateFormatter from '../../utils/dateFormatter';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// TODO: 목록이 비어있는 경우 EmptyListPlaceholder 추가하기

const MyAuctionList = () => {
  const [pageNum, setPageNum] = useState(1);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  const { data: myAuctionData, isSuccess: myAuctionFetched } =
    useMyAuctionQuery(pageNum, 12);

  return (
    <Container>
      <AuctionListContainer>
        {myAuctionFetched &&
          myAuctionData?.results.map((auction) => {
            return (
              <AuctionListItem
                title={auction.title}
                thumbnailUrl={auction.product?.thumbnail?.file}
                participantCount={auction.product_groups_count}
                startAt={dateFormatter(auction.created_at)}
                period={timeLimitHandler(auction.end_at)}
                linkTo={`/auctioneer/${auction.id}/${auction.product.id}`}
                linkCondition={!isAuctionFinishedHandler(auction.end_at)}
                isFinished={isAuctionFinishedHandler(auction.end_at)}
                relatedUser={auction?.owner}
              />
            );
          })}
      </AuctionListContainer>
      {/*Pagination*/}
      <PaginationContainer>
        <StyledPagination
          count={myAuctionData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
    </Container>
  );
};

export default MyAuctionList;
