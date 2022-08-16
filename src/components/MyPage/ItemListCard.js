import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { useDeleteProductMutation } from 'queries/product';

const Container = styled.div`
  position: relative;
  max-width: calc((100% - 6rem) / 4);
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc((100% - 6rem) / 4);
  height: 100%;
  z-index: 1;
  border-radius: 1rem !important;
  border: 1.3px solid transparent;

  :hover {
    border: 1.3px solid ${(props) => props.theme.color_border__hover__light};
  }

  @media screen and (max-width: 1300px) {
    flex-basis: calc((100% - 4rem) / 3);
    max-width: calc((100% - 4rem) / 3);
  }

  @media screen and (max-width: 1000px) {
    flex-basis: calc((100% - 2rem) / 2);
    max-width: calc((100% - 2rem) / 2);
  }
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const ImageContainer = styled(CardMedia)`
  width: 3rem;
  height: 8rem;
  background-size: cover;

  @media screen and (max-width: 1300px) {
    height: 10rem;
  }

  @media screen and (max-width: 1000px) {
    height: 12rem;
  }
`;

const ProductCard = styled(Card)`
  border-radius: 20px !important;
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

const StyledDeleteIcon = styled(DeleteForeverIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  color: #f00;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  color: ${(props) => props.theme.color_buttontext__ok};
  background: ${(props) => props.theme.color_background__success};
`;

const StyledModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  height: 13rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_white};
`;

const Text = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  bottom: 40%;
  margin-top: 17%;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const DeleteButton = styled.button`
  position: absolute;
  width: 15%;
  height: 15%;
  left: 32%;
  bottom: 10%;
  margin-top: 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__warning};
`;

const DeleteCancelButton = styled.button`
  position: absolute;
  width: 15%;
  height: 15%;
  right: 32%;
  bottom: 10%;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_font__disabled};
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
      <Link to={`/itemdetail/${productData.id}`}>
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
      </Link>
      {isShown && <StyledDeleteIcon onClick={handleOpen} />}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModal>
          <div>
            <Text>정말 '{productData.name}'을 삭제하시겠습니까?</Text>
            <DeleteButton onClick={deleteHandler}>네</DeleteButton>
            <DeleteCancelButton onClick={handleClose}>
              아니요
            </DeleteCancelButton>
          </div>
        </StyledModal>
      </Modal>
    </Container>
  );
};

export default ItemListCard;
