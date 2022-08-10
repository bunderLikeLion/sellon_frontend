import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
  width: 30%;
  margin-top: 3rem;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;

const CardTopImg = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f00;
`;

const CardBottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const PersonCntBox = styled.span`
  display: inline-flex;
  height: 2.4rem;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  font-weight: 700;
  border: 1px solid grey;
  border-radius: 1rem;
  background: #101010;
`;

const EnterBox = styled(PersonCntBox)`
  display: inline-block;
  width: 10rem;
  margin-left: 3rem;
  text-align: center;
`;

const InterestedAuctionListCard = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          height="150"
          image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
        />
        <CardTop>
          <CardTopImg>img</CardTopImg>
          <CardHeader title="Stussy 8  ball Tee 팔..." />
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            10명
          </PersonCntBox>
          <EnterBox>들어가기</EnterBox>
        </CardBottom>
      </Card>
    </Container>
  );
};

export default InterestedAuctionListCard;
