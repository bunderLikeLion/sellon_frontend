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
      {/*Card_01*/}
      {/*
        TODO: 카드 상단 이미지가 너무 높이가 낮다. 늘리여야한다.
        이때, 반응형 수치도 고려 헤야 함.
      */}

      {/*
        TODO: 당일 종료, D-1 등의 라벨을 좌측 상단으로 이동
        경매 시작일자 및 사람수가 아래에 노출되게 하기

        요건 모든 경매 카드에 대해서 행해져야 함.
      */}

      {/*
        TODO: 관심경매의 X를 하트 아이콘으로 바꾸기
      */}

      {/* TODO: 아이템 추가 모달 디자인 - 인풋을 통일하기 */}
      <AuctionListItem
        title={'test'}
        thumbnailUrl={dummyImageUrl}
        participantCount={20}
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
