import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { useMyProductsQuery } from 'queries/product';
import AuctionListContainer from 'components/Shared/AuctionListContainer';
import AuctionListItem from 'components/Shared/AuctionListItem';
import { userAtom } from '../../states';

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

const InterestedAuctionListCard = () => {
  const [pageNum, setPageNum] = useState(1);
  const user = useRecoilValue(userAtom);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum, 6);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  // TODO: isFinished props
  const isFinished = false
  const dummyImageUrl = "https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200";

  return (

    <AuctionListContainer>
      {/* TODO: 하기 컴포넌트에 API 연결하기 */}
      <AuctionListItem
        title={'test'}
        thumbnailUrl={dummyImageUrl}
        participantCount={20}
        startAt={'2022.08.05'}
        period={'D-7'}
        linkTo={'/auctions/1'}
        linkCondition={!isFinished}
      />
      {/*Pagination*/}
      <PaginationContainer>
        <StyledPagination
          count={myProductsData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
    </AuctionListContainer>
  );
};

export default InterestedAuctionListCard;
