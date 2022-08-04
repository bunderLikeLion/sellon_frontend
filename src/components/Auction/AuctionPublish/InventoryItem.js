import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardHeader from '@mui/material/CardHeader';

const Container = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 30%;
  height: 55%;
  margin: 2% 0;
  border-radius: 1rem !important;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 70%;
  border-bottom: 0.2rem solid black;
`;

const ItemContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const AddButton = styled.button`
  position: absolute;
  right: 5%;
  bottom: 10%;
  width: 40%;
  height: 30%;
  border-radius: 1rem;
`;

const InventoryItem = () => {
  return (
    <Container sx={{ maxWidth: '100%' }}>
      <ImgContainer>
        <CardMedia
          component="img"
          image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
        />
      </ImgContainer>
      <ItemContentContainer>
        <CardTop>
          <CardHeader title="Stussy 8  ball Tee" />
        </CardTop>
        <AddButton>추가</AddButton>
      </ItemContentContainer>
    </Container>
  );
};

export default InventoryItem;
