import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
  position: relative;
  margin-top: 3rem;
  width: 30%;
`;

const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const CardTopImg = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: red;
`;

const CardBottom = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;

const PersonCntBox = styled.span`
  display: inline-flex;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  height: 2.4rem;
  background: #101010;
  border: 1px solid grey;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

const EnterBox = styled(PersonCntBox)`
  display: inline-block;
  margin-left: 3rem;
  width: 10rem;
  text-align: center;
`;

const FinishedOverlay = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(57, 57, 65, 0.83) !important;
  font-size: 2rem;
`;

const InterestedAuctionListCardFinished = () => {
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
            11명
          </PersonCntBox>
          <EnterBox>들어가기</EnterBox>
        </CardBottom>
      </Card>
      <FinishedOverlay>
        <p>종료된 거래입니다.</p>
      </FinishedOverlay>
    </Container>
  );
};

export default InterestedAuctionListCardFinished;
