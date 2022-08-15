import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { useMyProductsQuery } from 'queries/product';
import AuctionListItem from 'components/Shared/AuctionListItem';

const StyledWrapContainer = styled.div`
  display: flex !important;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 2rem 2rem;
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

export const FinishedOverlay = styled(Card)`
  position: absolute;
  display: ${(props) => (props.isFinished ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 2rem;
  background-color: rgba(57, 57, 65, 0.83) !important;
`;

const InterestedAuctionListCard = () => {
  const [pageNum, setPageNum] = useState(1);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum, 6);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  const dummyImageUrl = "https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200";

  return (
    <StyledWrapContainer>
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
        관심 경매 카드 디자인 이상함. 글씨 크기가 너무 크다.
       */}

      {/*
        TODO: 카드 제목 세로 정렬 가운데
       */}

      {/*
        TODO: 관심경매의 X를 하트 아이콘으로 바꾸기
      */}

      {/* TODO: 관심경매 카드 글씨 크기 조절 */}

      {/* TODO: 아이템 추가 모달 디자인 - 인풋을 통일하기 */}
      <AuctionListItem title={'test'} thumbnailUrl={dummyImageUrl} participantCount={20} period={'D-7'}/>
      <AuctionListItem title={'사탕 살래'} thumbnailUrl={dummyImageUrl} participantCount={10} period={'D-7'}/>
      <AuctionListItem title={'test22'} thumbnailUrl={dummyImageUrl} participantCount={11} period={'D-7'}/>
      <AuctionListItem title={'test1231'} thumbnailUrl={dummyImageUrl} participantCount={12} period={'D-7'}/>
      <AuctionListItem title={'abcd'} thumbnailUrl={dummyImageUrl} participantCount={13} period={'D-7'}/>
      <AuctionListItem title={'abcde'} thumbnailUrl={dummyImageUrl} participantCount={14} period={'D-7'}/>

      {/*Pagination*/}
      <PaginationContainer>
        <StyledPagination
          count={myProductsData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
    </StyledWrapContainer>
  );
};

export default InterestedAuctionListCard;
