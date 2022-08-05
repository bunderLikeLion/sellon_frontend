import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 3rem;
  width: 30%;
  height: 100%;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${(props) => props.theme.color_border__topleft};
    border-radius: 20px !important;
  }

  &:hover:before {
    position: absolute;
    top: -2.5%;
    left: -2.5%;
    width: 103%;
    height: 103%;
    z-index: -1;
    border-radius: 20px;
    background: ${(props) => props.theme.color_border__hover};
  }
`;

const ImageContainer = styled(CardMedia)`
  width: 3rem;
  height: 13rem;
  background-size: cover;
`;

const ProductCard = styled(Card)`
  background: ${(props) => props.theme.color_background__primary} !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
  border-radius: 20px !important;
`;

const StyledCardHeader = styled(CardHeader)`
  height: 7vh;
  padding: 1rem !important;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  height: 1vh;
`;

const ItemListCard = ({ productData }) => {
  return (
    <Container>
      <ProductCard sx={{ maxWidth: '100%' }}>
        <ImageContainer
          component="img"
          height="150"
          image={productData.thumbnail.file}
        />
        <StyledCardHeader title={productData.name} />
        <StyledCardContent>상세보기</StyledCardContent>
      </ProductCard>
    </Container>
  );
};

export default ItemListCard;
