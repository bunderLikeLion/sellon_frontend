import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const AccordionContainer = styled.div`
  clear: both;
  margin-bottom: 1rem;
`;

const StyledAccordion = styled(Accordion)`
  margin-bottom: 3%;
  border-radius: 1rem !important;
  background: ${(props) => props.theme.color_background__secondary} !important;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: inline-flex;
  width: 100%;
  height: 6rem;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  height: 6rem;
`;

const BuyerImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10rem;
  height: 5rem;
  margin: 0 auto;
`;

const BuyerImage = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://s3.orbi.kr/data/file/united2/8d45fd407a3344b9b7457538ec64e0f8.jpg);
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
  height: 5rem;
`;

const ItemImage = styled.div`
  width: 15%;
  height: 4rem;
  margin: 0.5rem 1rem;
  border-radius: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.imgUrl})`};
`;

const EmptyBox = styled.div`
  width: 1.9rem;
`;

const BuyerSingleBox = () => {
  const [expanded, setExpanded] = useState(false);

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
            <BuyerImage />
            <DivisionLine />
          </BuyerImageContainer>

          <ItemListContainer>
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
          </ItemListContainer>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <BuyerImageContainer></BuyerImageContainer>

          <ItemListContainer>
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
          </ItemListContainer>

          <EmptyBox />
        </StyledAccordionDetails>
      </StyledAccordion>
    </AccordionContainer>
  );
};

export default BuyerSingleBox;
