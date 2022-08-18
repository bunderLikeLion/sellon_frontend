import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import AuctionDetailModal from '../AuctionDetail/AuctionDetailModal';

const AccordionContainer = styled.div`
  clear: both;
  width: 100%;
  margin: 1rem;

  @media screen and (max-width: 700px) {
    margin: 0.5rem;
  }
`;

const StyledAccordion = styled(Accordion)`
  border-radius: 1rem !important;
  background: ${(props) => props.theme.color_background__secondary} !important;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: inline-flex;
  width: 100%;
  height: fit-content;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  height: fit-content;
  & .MuiAccordionSummary-content {
    height: fit-content;
  }
`;

const BuyerImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10rem;
  height: 5rem;
  margin: 0 auto;
`;

const BuyerImage = styled(CardMedia)`
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const DivisionLine = styled.div`
  width: 0.2rem;
  height: 90%;
  margin: 0 1rem;
  background: ${(props) => props.theme.color_font__tertiary} !important;
`;

const ItemListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ItemDetailListContainer = styled(ItemListContainer)`
  height: fit-content;
`;

const ItemImage = styled.div`
  width: 4rem;
  height: 4rem;
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

const EmptyBox = styled.div`
  width: 1.9rem;
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
    <AccordionContainer>
      <StyledAccordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <BuyerImageContainer>
            <BuyerImage image={singleGroup?.user?.avatar} />
            <DivisionLine />
          </BuyerImageContainer>

          <ItemListContainer>
            {singleGroup &&
              singleGroup?.products.map((singleProduct, idx) => {
                if (idx < 5)
                  return (
                    <ItemImage
                      key={singleProduct?.id}
                      onClick={() => clickImgFunc(singleProduct)}
                      imgUrl={singleProduct?.thumbnail?.file}
                    />
                  );
              })}
          </ItemListContainer>
        </StyledAccordionSummary>
        {singleGroup && singleGroup?.products.length > 5 && (
          <StyledAccordionDetails>
            <ItemDetailListContainer>
              {singleGroup?.products.map((singleProduct, idx) => {
                if (idx > 4)
                  return (
                    <ItemImage
                      key={singleProduct?.id}
                      onClick={() => clickImgFunc(singleProduct)}
                      imgUrl={singleProduct?.thumbnail?.file}
                    />
                  );
              })}
            </ItemDetailListContainer>

            <EmptyBox />
          </StyledAccordionDetails>
        )}
      </StyledAccordion>
      <AuctionDetailModal
        handleModal={handleModal}
        isModalOpened={isModalOpened}
        smallImgRelatedItemId={singleProduct}
      />
    </AccordionContainer>
  );
};

export default BuyerSingleBox;
