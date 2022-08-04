import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
  margin-top: 3rem;
  width: 30%;
  position: relative;
`;

const CardContainor = styled(Card)`
  border-radius: 3rem !important;
  background: gray !important;
`;

const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 0.5rem;
`;

const CardTopImg = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  border-radius: 50%;
  background: darkgray;
`;

const CardBottom = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const PersonCntBox = styled.span`
  display: inline-flex;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  height: 2.4rem;
  background: #101010;
  border: 1px solid grey;
  border-radius: 4rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

const EnterBox = styled(PersonCntBox)`
  display: inline-block;
  margin-left: 3rem;
  width: 10rem;
  text-align: center;
`;

const HeartIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: black;
`;

const HomeAuctionListCard = () => {
  return (
    <Container>
      <CardContainor sx={{ maxWidth: '100%' }}>
        <HeartIcon />
        <CardMedia
          component="img"
          height="150"
          image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
        />
        <CardTop>
          <CardTopImg>profile</CardTopImg>
          <CardHeader title="경매글 제목" />
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
          </PersonCntBox>
          <EnterBox>들어가기</EnterBox>
        </CardBottom>
      </CardContainor>
    </Container>
  );
};

export default HomeAuctionListCard;
