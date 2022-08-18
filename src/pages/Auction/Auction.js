import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HomeAuctionListCard from 'components/Home/HomeAuctionListCard';
import WrapContainer from 'layouts/WrapContainer';
import { useState } from 'react';
import FilterModal from 'components/Home/FilterModal';
import useInput from 'hooks/useInput';
import { Link } from 'react-router-dom';
import { useTodayCompletedQuery } from 'queries/dealing';
import { useAuctionsQuery, usePopularAuctionsQuery } from 'queries/auction';
import isAuctionFinishedHandler from 'utils/isAuctionFinishedHandler';
import CardMedia from '@mui/material/CardMedia';
import { Pagination } from '@mui/material';
import AuctionSlider from 'components/Auction/AuctionSlider';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

const Form = styled.div`
  width: 100%;
`;

const UserPic = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #000;
`;

const ProductPic = styled(CardMedia)`
  width: 7rem;
  height: 7rem;
  background: #fff;
`;

const BestAuctionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2rem auto 5rem auto;
`;

const BestAuctionTitle = styled.div`
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.color_font__primary};
`;

const AuctionContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 2rem;
  background: gray;
`;

const InterestedUser = styled.div`
  float: right;
  font-size: 0.8rem;
`;

const AuctionUploadContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  margin: 2rem 0px 1rem 0px;
`;

const AuctionPublishLink = styled(Link)`
  width: fit-content;
`;

const SubmitAuctionButton = styled.button`
  position: relative;
  right: 0;
  width: 8rem;
  height: 2rem;
  margin: 1.5rem 0px 0px 0px !important;
  border: none;
  border-radius: 1.1rem;
  font-size: 1rem;
  background: ${(props) => props.theme.color_button__ok};
  color: ${(props) => props.theme.color_font__secondary};
`;

const DealComplete = styled.div`
  padding-left: 3rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color_font__secondary};
`;

const FameShortcut = styled(Link)`
  display: flex;
  align-items: center;
  width: 12rem;
  height: 3rem;
  margin: 0;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${(props) => props.theme.color_font__primary};
  background: transparent;
  :hover {
    font-weight: 800;
  }
`;

const SubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  margin: 0.5rem 0 5rem 0;
  border-radius: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__success};
`;

const AuctionListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
`;

const AuctionFilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HomeGroundAuction = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const FilterButton = styled.button`
  width: 7rem;
  height: 1.7rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color_font__primary};
  background: transparent;
  border: 1px solid ${(props) => props.theme.color_border__hover__light};
  transition: all 0.5s ease;

  :hover {
    background: ${(props) => props.theme.color_background__success};
    border: none;
  }
`;

const MostPopular = styled.div`
  margin: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 2rem 2rem;
`;

const SelectBox = styled(Select)`
  height: 1.7rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color_font__primary} !important;
  background: #3a335c !important;
`;

const InputLabelBox = styled(InputLabel)`
  font-weight: bold !important;
  color: ${(props) => props.theme.color_font__tertiary} !important;
`;

const MenuItemBox = styled(MenuItem)`
  color: ${(props) => props.theme.color_font__primary} !important;
`;

//Pagination
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0.3rem;
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

const Auction = () => {
  const user = useRecoilValue(userAtom);
  const [isFilterModalOpened, setIsFilterModalOpened] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [areaRestriction, setAreaRestriction] = useState(1);
  const [cat, handleCat, resetCat] = useInput('전체');
  const [sort, handleSort] = useInput('recent');
  const [pageNum, setPageNum] = useState(1);

  const { data: todayCompletedCnt, isSuccess: todayCompletedCntFetched } =
    useTodayCompletedQuery();

  const { data: auctionList, isSuccess: auctionListFetched } = useAuctionsQuery(
    sort,
    pageNum,
    cat
  );

  const { data: popularAuctionList, isSuccess: popularAuctionListFetched } =
    usePopularAuctionsQuery();

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  const handleFilterModal = () => setIsFilterModalOpened(!isFilterModalOpened);

  return (
    <WrapContainer>
      <Form>
        <AuctionUploadContainer>
          {user && (
            <AuctionPublishLink to={'/auction/newauction'}>
              <SubmitAuctionButton>경매 올리기</SubmitAuctionButton>
            </AuctionPublishLink>
          )}
        </AuctionUploadContainer>

        <SubNav>
          <DealComplete>
            오늘 총 {todayCompletedCntFetched && todayCompletedCnt?.count}건의
            경매가 성사되었습니다!
          </DealComplete>
          <FameShortcut to={'/toprank'}>명예의 전당 바로가기 →</FameShortcut>
        </SubNav>

        <BestAuctionContainer>
          <BestAuctionTitle>실시간 인기 경매</BestAuctionTitle>
          {popularAuctionListFetched && (
            <AuctionSlider items={popularAuctionList} />
          )}
        </BestAuctionContainer>

        <AuctionListContainer>
          <AuctionFilterContainer>
            <HomeGroundAuction>홈그라운드의 모든 거래</HomeGroundAuction>
            <FilterButton onClick={handleFilterModal}>
              필터 및 검색
            </FilterButton>
          </AuctionFilterContainer>
          <FormControl sx={{ m: 1, minWidth: 120, maxHeight: 30 }} size="small">
            {/*<InputLabelBox id="demo-select-small">최신순</InputLabelBox>*/}
            <SelectBox
              labelId="demo-select-small"
              id="demo-select-small"
              value={sort}
              onChange={handleSort}
              MenuProps={{
                sx: {
                  '& .MuiMenu-list': {
                    backgroundColor: '#3A335C',
                  },
                },
              }}
            >
              <MenuItemBox value={'recent'}>최신순</MenuItemBox>
              <MenuItemBox value={'popular'}>인기순</MenuItemBox>
              <MenuItemBox value={'oldest'}>과거순</MenuItemBox>
              <MenuItemBox value={'interest'}>관심순</MenuItemBox>
            </SelectBox>
          </FormControl>
        </AuctionListContainer>

        <Container>
          {auctionListFetched && (
            <>
              {auctionList?.results.map((singleAuction) => {
                return (
                  <HomeAuctionListCard
                    auctionData={singleAuction}
                    isFinished={isAuctionFinishedHandler(singleAuction?.end_at)}
                    isInterested={singleAuction?.is_interested}
                  />
                );
              })}
            </>
          )}
          {/*Pagination*/}
          <PaginationContainer>
            <StyledPagination
              count={auctionList?.total_pages}
              page={pageNum}
              onChange={handleChange}
            />
          </PaginationContainer>
        </Container>
      </Form>
      <FilterModal
        isFilterModalOpened={isFilterModalOpened}
        handleFilterModal={handleFilterModal}
        filterKeyword={filterKeyword}
        setFilterKeyword={setFilterKeyword}
        areaRestriction={areaRestriction}
        setAreaRestriction={setAreaRestriction}
        cat={cat}
        handleCat={handleCat}
        resetCat={resetCat}
      />
    </WrapContainer>
  );
};

export default Auction;
