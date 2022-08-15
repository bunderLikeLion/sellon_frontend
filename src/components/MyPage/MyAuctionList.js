import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { useMyProductsQuery } from 'queries/product';

const StyledWrapContainer = styled.div`
  display: flex !important;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 2rem 2rem;
`;

const CardContainer = styled(Card)`
  position: relative;
  border-radius: 1rem !important;
  max-width: calc((100% - 6rem) / 4);
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc((100% - 6rem) / 4);
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__primary} !important;
  border: 1.3px solid transparent;

  :hover {
    border: 1.3px solid ${(props) => props.theme.color_border__hover__light};
  }

  @media screen and (max-width: 1300px) {
    flex-basis: calc((100% - 4rem) / 3);
    max-width: calc((100% - 4rem) / 3);
  }

  @media screen and (max-width: 1000px) {
    flex-basis: calc((100% - 2rem) / 2);
    max-width: calc((100% - 2rem) / 2);
  }
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: start;
  padding: 0.8rem 1rem 0.2rem 1rem;
  align-items: center;
  width: 100%;
`;

const CardProfile = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #c9c9c9;
`;

const CardBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem 1rem 1rem;
`;

const PersonCntBox = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 5rem;
  height: 2.4rem;
  margin: 0.3rem;
  border-radius: 4rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__number} !important;
  background: transparent;
`;

const EnterBox = styled(PersonCntBox)`
  width: fit-content;
  padding: 0.5rem 1.3rem;
  text-align: center;
  border: none;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__success} !important;
`;

const MyCardMedia = styled(CardMedia)`
  object-fit: cover;
  height: 8rem;

  @media screen and (max-width: 1300px) {
    height: 10rem;
  }

  @media screen and (max-width: 1000px) {
    height: 12rem;
  }
`;

const MyCardHeader = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  font-size: 1.2rem;
  padding: 0.5rem;
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
        TODO: 내가 올린 경매 페이지 및 기타 카드 등에서 프로필 이미지와 아래 컨텐츠의 시작점을 같게 하기
      */}

      {/*
        TODO: 카드에서 프로필 사진이랑 제목 사이의 간격 늘리기
        TODO: 카드 제목 세로 정렬 가운데
       */}

      {/*
        TODO: 관심경매의 X를 하트 아이콘으로 바꾸기
      */}

      {/* TODO: 관심경매 카드 글씨 크기 조절 */}

      {/* TODO: 아이템 추가 모달 디자인 - 인풋을 통일하기 */}

      <CardContainer>
        <MyCardMedia
          component="img"
          height="150"
          image="https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Card_02*/}
      <CardContainer>
        <MyCardMedia
          component="img"
          height="150"
          image="https://hhsmedia.com/wp-content/uploads/2018/10/candies-e1541131061529-900x600.jpg"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Card_03*/}
      <CardContainer>
        <MyCardMedia
          component="img"
          height="150"
          image="https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Card_04*/}
      <CardContainer>
        <MyCardMedia
          component="img"
          height="150"
          image="https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Card_05*/}
      <CardContainer>
        <MyCardMedia
          component="img"
          height="150"
          image="https://hhsmedia.com/wp-content/uploads/2018/10/candies-e1541131061529-900x600.jpg"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
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
