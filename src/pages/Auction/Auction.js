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
import { StyledLink } from 'styles/StyledComponetStyles';
import { Link } from 'react-router-dom';
import { useTodayCompletedQuery } from 'queries/dealing';
import { useAuctionsQuery, usePopularAuctionsQuery } from 'queries/auction';
import isAuctionFinishedHandler from '../../utils/isAuctionFinishedHandler';
import InterestedAuctionListCard from '../../components/MyPage/InterestedAuctionListCard';
import CardMedia from '@mui/material/CardMedia';

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
  margin: 2rem auto;
`;

const BestAuctionTitle = styled.div`
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.color_font__primary};
`;

const AuctionContainer = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 2rem;
  border-radius: 2rem;
  background: gray;
`;

const InterestedUser = styled.div`
  float: right;
  font-size: 0.8rem;
`;

const SubNav2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

const SubNav2_left = styled.div`
  display: flex;
  align-items: center;
`;

const HomeGroundTitle = styled.div`
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const AuctionPublishLink = styled(Link)`
  width: 10.5rem;
  height: 2rem;
`;

const SubmitAuctionButton = styled.button`
  width: 10rem;
  height: 2rem;
  margin: 0.3rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: ${(props) => props.theme.color_button__ok};
  color: ${(props) => props.theme.color_font__secondary};
  :hover {
    transition: 0.5s;
    transform: translateY(-0.2rem);
    border: 1px solid ${(props) => props.theme.color_border__bottomright} !important;
  }
`;

const DealComplete = styled.div`
  padding-left: 3rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color_font__secondary};
`;

const FameShortcut = styled.button`
  display: flex;
  align-items: flex-end;
  float: right;
  width: 13rem;
  height: 3rem;
  margin: 0;
  border: none;
  color: ${(props) => props.theme.color_font__primary};
  background: transparent;
  :hover {
    color: #e273ab;
    transition: 0.5s;
    transform: translateX(1rem);
  }
`;

const SubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__success};
`;

const SubNav3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
`;

const SubNav3_left = styled.div`
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
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_button__ok};
`;

const MostPopular = styled.div`
  margin: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
`;

const SelectBox = styled(Select)`
  background: #3a335c !important;
`;

const InputLabelBox = styled(InputLabel)`
  font-weight: bold !important;
  color: ${(props) => props.theme.color_font__tertiary} !important;
`;

const MenuItemBox = styled(MenuItem)`
  color: #ffffff !important;
`;

const Auction = () => {
  const [isFilterModalOpened, setIsFilterModalOpened] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [areaRestriction, setAreaRestriction] = useState(1);
  const [cat, setCat] = useState('');
  const [sort, handleSort] = useInput('');

  const handleFilterModal = () => setIsFilterModalOpened(!isFilterModalOpened);

  const { data: todayCompletedCnt, isSuccess: todayCompletedCntFetched } =
    useTodayCompletedQuery();

  const { data: auctionList, isSuccess: auctionListFetched } =
    useAuctionsQuery(sort);

  const { data: popularAuctionList, isSuccess: popularAuctionListFetched } =
    usePopularAuctionsQuery();

  return (
    <WrapContainer>
      <Form>
        <SubNav2>
          <SubNav2_left>
            <HomeGroundTitle>홈그라운드 거래</HomeGroundTitle>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabelBox id="demo-select-small">
                홈그라운드 설정
              </InputLabelBox>
              <SelectBox
                labelId="demo-select-small"
                id="demo-select-small"
                value=""
                label="Age"
                border= 'none'
                MenuProps={{
                  sx: {
                    '& .MuiMenu-list': {
                      backgroundColor: '#3A335C'
                    },
                  },
                }}
              >
                <MenuItemBox value={10}>기본모드</MenuItemBox>
                <MenuItemBox value={20}>여행모드</MenuItemBox>
              </SelectBox>
            </FormControl>
          </SubNav2_left>
          <AuctionPublishLink to={'/auction/newauction'}>
            <SubmitAuctionButton>경매 올리기</SubmitAuctionButton>
          </AuctionPublishLink>
        </SubNav2>

        <SubNav>
          <DealComplete>
            오늘 총 {todayCompletedCntFetched && todayCompletedCnt?.count}건의
            거래가 성사되었습니다!
          </DealComplete>
          <FameShortcut>
            <Link to={'/toprank'}>명예의 전당 바로가기 →</Link>
          </FameShortcut>
        </SubNav>

        <BestAuctionContainer>
          <BestAuctionTitle>실시간 인기 경매</BestAuctionTitle>
          {popularAuctionListFetched &&
            popularAuctionList.map((singlePopularAuctionItem) => {
              return (
                <StyledLink to={`/auction/${singlePopularAuctionItem?.id}`}>
                  <AuctionContainer key={singlePopularAuctionItem?.id}>
                    <MostPopular>{singlePopularAuctionItem?.title}</MostPopular>
                    <UserPic />
                    <ProductPic
                      image={singlePopularAuctionItem?.product?.thumbnail?.file}
                    />
                    <InterestedUser>
                      참여자수: {singlePopularAuctionItem?.product_groups_count}
                    </InterestedUser>
                  </AuctionContainer>
                </StyledLink>
              );
            })}
        </BestAuctionContainer>

        <SubNav3>
          <SubNav3_left>
            <HomeGroundAuction>홈그라운드의 모든 거래</HomeGroundAuction>
            <FilterButton onClick={handleFilterModal}>
              필터 및 검색
            </FilterButton>
          </SubNav3_left>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabelBox id="demo-select-small">정렬</InputLabelBox>
            <SelectBox
              labelId="demo-select-small"
              id="demo-select-small"
              value={sort}
              onChange={handleSort}
              MenuProps={{
                sx: {
                  '& .MuiMenu-list': {
                    backgroundColor: '#3A335C'
                  },
                },
              }}
            >
              <MenuItemBox value={'popular'}>인기순</MenuItemBox>
              <MenuItemBox value={'oldest'}>과거순</MenuItemBox>
              <MenuItemBox value={'interest'}>관심순</MenuItemBox>
            </SelectBox>
          </FormControl>
        </SubNav3>

        <Container>
          {auctionListFetched && (
            <>
              {auctionList?.results.map((singleAuction) => {
                console.log(singleAuction, 'single');
                if (isAuctionFinishedHandler(singleAuction?.end_at)) {
                  // 끝난 경매
                  return (
                    <HomeAuctionListCard
                      auctionData={singleAuction}
                      isFinished={true}
                    />
                  );
                } else {
                  // 진행중인 경매
                  return (
                    <HomeAuctionListCard
                      auctionData={singleAuction}
                      isFinished={false}
                    />
                  );
                }
              })}
            </>
          )}
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
        setCat={setCat}
      />
    </WrapContainer>
  );
};
export default Auction;
