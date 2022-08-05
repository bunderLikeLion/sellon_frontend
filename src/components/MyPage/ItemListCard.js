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
  }

  &:hover:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-image: ${(props) => props.theme.color_border__hover};
    border-image-slice: 1;
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
        <StyledCardContent>
          {/*          <Box
            component="div"
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : '#fff',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
              textAlign: 'center',
            }}
          >*/}
          상세보기
          {/*</Box>*/}
        </StyledCardContent>
      </ProductCard>
    </Container>
  );
};

export default ItemListCard;
