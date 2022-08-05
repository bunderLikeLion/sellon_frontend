import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HomeAuctionListCard from 'components/Home/HomeAuctionListCard';
import { useState } from 'react';
import WrapContainer from 'layouts/WrapContainer';

const Form = styled.div`
  width: 100%;
`;

const Search = styled.input`
  display: block;
  float: right;
  width: 5rem;
  border: none;
`;

const UserPic = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: orange;
  border-radius: 50%;
`;

const ProductPic = styled.div`
  width: 7rem;
  height: 7rem;
  background: lightblue;
`;

const BestAuctionContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem auto;
  flex-direction: column;
  align-items: center;
`;

const BestAuctionTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  width: 100%;
  color: ${(props) => props.theme.color_font__primary};
`;

const AuctionContainer = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 2rem;
  background: gray;
  border-radius: 2rem;
`;

const InterestedUser = styled.div`
  font-size: 0.8rem;
  float: right;
`;

const SubNav2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const SubNav2_left = styled.div`
  display: flex;
  align-items: center;
`;

const HomegroundTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const SubmitAuctionButton = styled.button`
  margin: 0.3rem;
  width: 7rem;
  height: 2rem;
  background: ${(props) => props.theme.color_button_ok};
  border-radius: 1rem;
  font-size: 1rem;
`;

const DealComplete = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color_font__secondary};
  padding-left: 3rem;
`;

const FameShortcut = styled.button`
  margin: 0;
  float: right;
  width: 13rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.color_font__primary};
`;

const SubNav = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  height: 4rem;
  justify-content: space-between;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__success};
`;

const SubNav3 = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubNav3_left = styled.div`
  display: flex;
  align-items: center;
`;

const HomegroundAuction = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const MostPopluar = styled.div`
  margin: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
`;

const SelectBox = styled(Select)`
  background-color: ${(props) => props.theme.color_button__filter};
`;

const InputLabelBox = styled(InputLabel)`
  font-weight: bold !important;
`;

const MenuItemBox = styled(MenuItem)`
  background: black
  color: white;
`;

const Home = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <WrapContainer>
      <Form>
        <SubNav2>
          <SubNav2_left>
            <HomegroundTitle>홈그라운드 거래</HomegroundTitle>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabelBox id="demo-select-small">
                홈그라운드 설정
              </InputLabelBox>
              <SelectBox
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItemBox value={10}>기본모드</MenuItemBox>
                <MenuItemBox value={20}>여행모드</MenuItemBox>
              </SelectBox>
            </FormControl>
          </SubNav2_left>
          <SubmitAuctionButton>경매올리기</SubmitAuctionButton>
        </SubNav2>

        <SubNav>
          <DealComplete>오늘 총 ~건의 거래가 성사되었습니다!</DealComplete>
          <FameShortcut>명예의 전당 바로가기 →</FameShortcut>
        </SubNav>

        <BestAuctionContainer>
          <BestAuctionTitle>실시간 인기 경매</BestAuctionTitle>
          <AuctionContainer>
            <MostPopluar>가장 인기있는 거래 1</MostPopluar>
            <UserPic />
            <ProductPic />
            <InterestedUser>참여자수</InterestedUser>
          </AuctionContainer>

          <AuctionContainer>
            <MostPopluar>가장 인기있는 거래 2</MostPopluar>
            <UserPic />
            <ProductPic />
            <InterestedUser>참여자수</InterestedUser>
          </AuctionContainer>
        </BestAuctionContainer>

        <SubNav3>
          <SubNav3_left>
            <HomegroundAuction>홈그라운드의 모든 거래</HomegroundAuction>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabelBox id="demo-select-small">카테고리</InputLabelBox>
              <SelectBox
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItemBox value={10}>전체</MenuItemBox>
                <MenuItemBox value={20}>스포츠</MenuItemBox>
                <MenuItemBox value={30}>의류</MenuItemBox>
              </SelectBox>
            </FormControl>
          </SubNav3_left>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabelBox id="demo-select-small">정렬</InputLabelBox>
            <SelectBox
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItemBox value={10}>인기순</MenuItemBox>
              <MenuItemBox value={20}>최신순</MenuItemBox>
              <MenuItemBox value={30}>관심순</MenuItemBox>
            </SelectBox>
          </FormControl>
        </SubNav3>

        <Container>
          <HomeAuctionListCard />
          <HomeAuctionListCard />
          <HomeAuctionListCard />
          <HomeAuctionListCard />
          <HomeAuctionListCard />
          <HomeAuctionListCard />
          <HomeAuctionListCard />
          <HomeAuctionListCard />
        </Container>
      </Form>
    </WrapContainer>
  );
};

export default Home;
