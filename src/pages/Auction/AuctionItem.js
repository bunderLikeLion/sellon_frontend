import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardHeader from '@mui/material/CardHeader';

const Container = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 2rem;
`;

const CardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
`;

const PersonCntBox = styled.span`
  display: inline-flex;
  padding: 0.4rem 0.8rem;
  margin-bottom: 0.5rem;
  height: 2.4rem;
  background: #101010;
  border: 1px solid grey;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
`;

const EnterBox = styled(PersonCntBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  font-size: 1rem;
  width: 15rem;
`;

const ItemImg = styled(CardMedia)`
  margin-left: auto;
  margin-right: auto;
  width: 60% !important;
  height: 75% !important;
`;

const ItemContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AuctionItem = () => {
  return (
    <Container sx={{ maxWidth: '100%' }}>
      <ItemImg
        component="img"
        image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
      />
      <ItemContentContainer>
        <CardTop>
          <CardHeader title="Stussy 8  ball Tee" />
        </CardTop>
        <CardBottom>
          <EnterBox>2022.8.3 ~ 2022.8.10</EnterBox>
        </CardBottom>
      </ItemContentContainer>
    </Container>
  );
};

export default AuctionItem;
