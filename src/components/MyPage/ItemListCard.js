import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useDeleteProductMutation from 'queries/product/useDeleteProductMutation';

const Container = styled.div`
  position: relative;
  margin: 3rem 0 0 1rem;
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

const StyledDeleteIcon = styled(DeleteForeverIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: red;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  background: ${(props) => props.theme.color_background__success};
  border-radius: 20px;
  color: ${(props) => props.theme.color_buttontext__ok};
  margin-bottom: 1rem;
`;

const StyledModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 30%;
  background: ${(props) => props.theme.color_border__topleft};
  color: ${(props) => props.theme.color_white};
  border: 2px solid #000;
  border-radius: 20px;
`;

const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ItemListCard = ({ productData }) => {
  const [isShown, setIsShown] = useState(false);
  const [open, setOpen] = useState(false);

  const { mutate: deleteItemMutate } = useDeleteProductMutation();

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setIsShown(false);
  };

  const deleteHandler = () => {
    deleteItemMutate(productData.id);
  };

  return (
    <Container
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <ProductCard sx={{ maxWidth: '100%' }}>
        <ImageContainer
          component="img"
          height="150"
          image={productData.thumbnail.file}
        />
        <StyledCardHeader title={productData.name} />
        <StyledCardContent>
          <CategoryBox>{productData.product_category.name}</CategoryBox>
        </StyledCardContent>
      </ProductCard>
      {isShown && <StyledDeleteIcon onClick={handleOpen} />}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModal>
          <StyledModalContent>
            <div>
              <p>정말 '{productData.name}'을 삭제하시겠습니까?</p>
              <button onClick={deleteHandler}>네</button>
              <button onClick={handleClose}>아니요</button>
            </div>
          </StyledModalContent>
        </StyledModal>
      </Modal>
    </Container>
  );
};

export default ItemListCard;
