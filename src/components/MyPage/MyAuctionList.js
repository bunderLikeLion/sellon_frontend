import styled from 'styled-components';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import AuctionListItem from 'components/Shared/AuctionListItem';
import { useMyAuctionQuery } from 'queries/auction';
import timeLimitHandler from 'utils/timeLimitHandler';
import isAuctionFinishedHandler from 'utils/isAuctionFinishedHandler';
import dateFormatter from '../../utils/dateFormatter';
import EmptyListPlaceHolder from 'components/Shared/EmptyListPlaceholder';
import AuctionListContainer from 'components/Shared/AuctionListContainer';


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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountText = styled.div`
  margin: 0.55rem 0 1.3rem 0 !important;
`;


const MyAuctionList = () => {
  const [pageNum, setPageNum] = useState(1);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  const { data: myAuctionData, isSuccess: myAuctionFetched } =
    useMyAuctionQuery(pageNum, 12);

  return (
      <ItemListContainer>
        {myAuctionFetched && (
          <>
            <CountText>총 {myAuctionData?.total_count}개</CountText>
            {
              myAuctionData?.total_count > 0 ? (
                <FlexContainer>
                  {myAuctionData?.results.map((auction) => (
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
                  ))}
                </FlexContainer>
            ) : <EmptyListPlaceHolder
            message="아직 경매를 열지 않았습니다. 경매를 열어보세요.😅" />
            }
          </>
        )}
        
      {/*Pagination*/}
      <PaginationContainer>
        <StyledPagination
          count={myAuctionData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
    </ItemListContainer>
  );
};

export default MyAuctionList;
