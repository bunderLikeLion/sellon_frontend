import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardHeader from '@mui/material/CardHeader';

const Container = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 25%;
  height: 55%;
  margin: 2%;
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

const InventoryItem = ({ singleItem, setSelectedItem, handleModal }) => {
  const selectFromInventoryFunc = () => {
    setSelectedItem(singleItem);
    handleModal();
  };

  return (
    <Container sx={{ maxWidth: '100%' }}>
      <ImgContainer>
        <CardMedia component="img" image={singleItem?.thumbnail?.file} />
      </ImgContainer>
      <ItemContentContainer>
        <CardTop>
          <CardHeader title={singleItem?.name} />
        </CardTop>
        <AddButton onClick={selectFromInventoryFunc}>추가</AddButton>
      </ItemContentContainer>
    </Container>
  );
};

export default InventoryItem;
