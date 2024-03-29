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
  width: 5rem;
  height: 100%;
  padding: 1rem !important;

  & .MuiCardHeader-content {
    display: block !important;
    width: 5rem !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    color: red;
    font-size: 1.2rem;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  padding: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;
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
  width: 40rem;
  height: fit-content;
  padding: 2rem 0;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_white};

  @media screen and (max-width: 1300px) {
    max-width: 40rem;
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    max-width: 30rem;
    width: 70%;
  }
`;

const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  height: fit-content;
  margin: 1rem 0;
  padding: 0 2rem;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.3rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const SmallText = styled.div`
  height: fit-content;
  font-size: 1rem;
  line-height: 1.4rem;
  white-space: pre-wrap;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DeleteButton = styled.button`
  width: 25%;
  height: 2.3rem;
  margin: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__warning};
`;

const DeleteCancelButton = styled.button`
  width: 25%;
  height: 2.3rem;
  margin: 1rem;
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
          {/* <StyledCardHeader title={productData.name} /> */}
          <StyledHeader>{productData.name}</StyledHeader>
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
          <InsideBox>
            <Text>정말 '{productData.name}'을 삭제하시겠습니까?</Text>
            <ButtonContainer>
              <DeleteButton onClick={deleteHandler}>네</DeleteButton>
              <DeleteCancelButton onClick={handleClose}>
                아니요
              </DeleteCancelButton>
            </ButtonContainer>
          </InsideBox>
        </StyledModal>
      </Modal>
    </Container>
  );
};

export default ItemListCard;
