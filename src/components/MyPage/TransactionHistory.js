import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useState } from 'react';

const SummaryLeft = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 33%;
  flex-shrink: 0;
`;

const SummaryRight = styled(SummaryLeft)`
  width: 66%;
`;

const SummaryLeftImg = styled(CardMedia)`
  width: 38% !important;
`;

const SummaryRightImg = styled(SummaryLeftImg)`
  width: 17% !important;
  margin-left: 1rem;
`;

const ExchangeIcon = styled(ChangeCircleIcon)`
  position: absolute;
  right: 20%;
  font-size: 3.5rem !important;
`;

const DetailLeft = styled.div`
  width: 60%;
  height: 10vh;
  background: red;
`;

const DetailRight = styled(DetailLeft)`
  width: 40%;
  background: blue;
`;

const TransactionHistory = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {expanded !== 'panel1' && (
            <>
              <SummaryLeft>
                <SummaryLeftImg
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
                />
                <ExchangeIcon />
              </SummaryLeft>
              {/*좌측 33%*/}
              <SummaryRight>
                <SummaryRightImg
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
                />
                <SummaryRightImg
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
                />
                <SummaryRightImg
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
                />
              </SummaryRight>
              {/*우측 66%*/}
            </>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <DetailLeft></DetailLeft>
          <DetailRight></DetailRight>
          {/*          <CardMedia
            component="img"
            height="30"
            image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
          />*/}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TransactionHistory;
