import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HomeAuctionListCard from 'components/Home/HomeAuctionListCard';
import { useState } from 'react';

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

const AuctionContainor = styled.div`
  margin: 3rem;
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
  background: orange;
  justify-content: space-between;
`;

const SubNav2_left = styled.div`
  display: flex;
`;

const HomegroundTitle = styled.div`
  margin: 1.5rem;
`;

const SubmitAuctionButton = styled.button`
  margin: 0.3rem;
  margin-right: 2rem;
`;

const DealComplete = styled.div`
  font-size: 1.5rem;
  padding-left: 3rem;
`;

const FameShortcut = styled.button`
  margin: 0;
  float: right;
`;

const SubNav = styled.div`
  display: flex;
  font-size: 1rem;
  padding: 1rem;
  background-color: gray;
  justify-content: space-between;
`;

const SubNav3 = styled.div`
  width: 100%;
  display: flex;
  background: orange;
  justify-content: space-between;
`;

const SubNav3_left = styled.div`
  display: flex;
`;

const HomegroundAuction = styled.div`
  margin: 1.5rem;
`;

const CategoryButton = styled.button`
  margin: 1rem;
`;

const MostPopluar = styled.div`
  margin: 1.5rem;
`;

const Containor = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Home = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Form>
      <Search placeholder="검색" />
      <SubNav2>
        <SubNav2_left>
          <HomegroundTitle>홈그라운드 거래</HomegroundTitle>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">홈그라운드 설정</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>기본모드</MenuItem>
              <MenuItem value={20}>여행모드</MenuItem>
            </Select>
          </FormControl>
        </SubNav2_left>
        <SubmitAuctionButton>경매올리기</SubmitAuctionButton>
      </SubNav2>
      <SubNav>
        <DealComplete>오늘 총 ~건의 거래가 성사되었습니다!</DealComplete>
        <FameShortcut>명예의 전당 바로가기➡️</FameShortcut>
      </SubNav>
      <AuctionContainor>
        <MostPopluar>가장 인기있는 거래 1</MostPopluar>
        <UserPic />
        <ProductPic />
        <InterestedUser>참여자수</InterestedUser>
      </AuctionContainor>
      <AuctionContainor>
        <MostPopluar>가장 인기있는 거래 2</MostPopluar>
        <UserPic />
        <ProductPic />
        <InterestedUser>참여자수</InterestedUser>
      </AuctionContainor>
      <SubNav3>
        <SubNav3_left>
          <HomegroundAuction>홈그라운드의 모든 거래</HomegroundAuction>
          <CategoryButton>카테고리</CategoryButton>
        </SubNav3_left>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">정렬</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>인기순</MenuItem>
            <MenuItem value={20}>최신순</MenuItem>
            <MenuItem value={30}>관심순</MenuItem>
          </Select>
        </FormControl>
      </SubNav3>
      <Containor>
        <HomeAuctionListCard />
        <HomeAuctionListCard />
        <HomeAuctionListCard />
      </Containor>
      <Containor>
        <HomeAuctionListCard />
        <HomeAuctionListCard />
        <HomeAuctionListCard />
      </Containor>
      <Containor>
        <HomeAuctionListCard />
        <HomeAuctionListCard />
        <HomeAuctionListCard />
      </Containor>
    </Form>
  );
};

export default Home;
