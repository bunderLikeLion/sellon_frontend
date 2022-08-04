import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardHeader from '@mui/material/CardHeader';

const Container = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  height: 90%;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 2rem;
`;

const ItemImg = styled(CardMedia)`
  width: 100% !important;
  height: 75% !important;
`;

const ItemContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const InventoryItem = () => {
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
      </ItemContentContainer>
    </Container>
  );
};

export default InventoryItem;
