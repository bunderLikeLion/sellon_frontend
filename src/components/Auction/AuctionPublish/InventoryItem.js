import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardHeader from '@mui/material/CardHeader';

const Container = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 28%;
  height: 55%;
  margin: 2%;
  border-radius: 1rem !important;
  cursor: pointer;
  border: 3.5px solid ${(props) => props.theme.color_border__topleft};
  border-right: 3.5px solid ${(props) => props.theme.color_border__bottomright};
  border-bottom: 3.5px solid ${(props) => props.theme.color_border__bottomright};
  background: ${(props) => props.theme.color_background__primary} !important;
  :hover {
    transition: 0.2s;
    box-shadow: 0 5px 15px 5px ${(props) => props.theme.color_border__topleft};
    transform: translateY(-5px);
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 70%;
`;

const ItemContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30%;
  background: ${(props) => props.theme.color_background__primary};
  font-size: 100rem !important;
`;

const CardTop = styled.div`
  color: ${(props) => props.theme.color_font__secondary};
`;

const InventoryItem = ({ singleItem, setSelectedItem, handleModal }) => {
  const selectFromInventoryFunc = () => {
    setSelectedItem(singleItem);
    handleModal();
  };

  return (
    <Container onClick={selectFromInventoryFunc} sx={{ maxWidth: '100%' }}>
      <ImgContainer>
        <CardMedia component="img" image={singleItem?.thumbnail?.file} />
      </ImgContainer>
      <ItemContentContainer>
        <CardTop>
          <CardHeader title={singleItem?.name} />
        </CardTop>
      </ItemContentContainer>
    </Container>
  );
};

export default InventoryItem;
