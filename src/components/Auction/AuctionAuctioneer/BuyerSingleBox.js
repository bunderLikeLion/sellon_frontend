import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
  border-radius: 1rem !important;
  background: ${(props) => props.theme.color_background__secondary} !important;
`;

const BuyerImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10rem;
  height: 100%;
  margin: 0 auto;
`;

const BuyerImage = styled(CardMedia)`
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const DivisionLine = styled.div`
  width: 0.2rem;
  height: 90%;
  background: ${(props) => props.theme.color_font__tertiary} !important;
`;

const ItemListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-left: 1rem;
  flex-wrap: wrap;
  gap: 0 1rem;
`;

const ItemImage = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.imgUrl})`};
  @media screen and (max-width: 700px) {
    width: 3rem;
    height: 3rem;
  }
`;

const BuyerSingleBox = ({ singleGroup }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);

  const clickImgFunc = (singleProductData) => {
    setSingleProduct(singleProductData);
    handleModal();
  };

  const handleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <BuyerImageContainer>
        <BuyerImage image={singleGroup?.user?.avatar} />
        <DivisionLine />
      </BuyerImageContainer>

      <ItemListContainer>
        {singleGroup &&
          singleGroup?.products.map((singleProduct, idx) => {
            return (
              <ItemImage
                key={singleProduct?.id}
                onClick={() => clickImgFunc(singleProduct)}
                imgUrl={singleProduct?.thumbnail?.file}
              />
            );
        })}
      </ItemListContainer>
    </Container>
  );
};

export default BuyerSingleBox;