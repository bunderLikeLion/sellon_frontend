import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Pagination } from '@mui/material';
import { useMyProductsQuery } from 'queries/product';


//최상위 컨테이너
const StyledWrapContainer = styled.div`
  display: inline-flex !important;
  width: 100%;
  height: 100%;
`;

//Pagination
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
`;

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    button {
      color: ${(props) => props.theme.color_font__secondary} !important;
    }
    .Mui-selected {
      color: ${(props) => props.theme.color_font__number} !important;
    }
  }
`;

//Summary
const SummaryImg = styled(CardMedia)`
  height: 7rem;
  width: 20% !important;
  margin-right: 3rem;
  border-radius: 10%;
`;

const StyledCardMediaImg = styled(CardMedia)`
  height: 12rem;
  width: 100% !important;
`;

const StyledDetailItemImg = styled(CardMedia)`
  height: 4rem;
  width: 25% !important;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 10%;
`;

const SummaryContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`;

const SummaryTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const SummaryUploadDate = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__tertiary} !important;
`;

const SummaryParticipantsWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  padding-right: 2rem;
`;

const SummaryParticipantIcon = styled(PersonOutlineOutlinedIcon)`
  width: 5%;
  margin-right: 0.3rem;
`;

const SummaryParticipantsTxt = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color_font__number} !important;
`;

//Accordion
//width: 65%;
const AccordionContainer = styled.div`
  width: 39.3rem;
  margin-right: 10%;
  border-radius: 1rem;
`;

const StyledAccordion = styled(Accordion)`
  margin-bottom: 3%;
  border-radius: 1rem !important;
  background: ${(props) => props.theme.color_background__primary} !important;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: inline-flex;
  width: 100%;
`;

const DetailsLeftContainer = styled.div`
  width: 45%;
`;

const StyledCard = styled(Card)`
  overflow: hidden;
  background: ${(props) => props.theme.color_background__third} !important;
`;

const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;

const StyledCardButton = styled(Button)`
  border-radius: 12% !important;
  overflow: hidden !important;
  font-weight: bold !important;
  color: black !important;
  background: #d9d9d9 !important;
`;

const DetailsRightContainer = styled(DetailsLeftContainer)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 41%;
  margin-left: 10%;
`;

//전체화면 우측 영역
const RightContainer = styled.div`
  width: 25%;
`;

const RightSmallContainer = styled.div`
  position: relative;
  width: 100%;
  height: 7rem;
  margin-bottom: 1rem;
  padding-top: 5%;
  padding-left: 5%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const RankInfo = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 5%;
  font-size: 2.5rem;
  font-weight: 600;
`;

const MyScopeInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-right: 5%;
`;

const MyScopeInfo = styled(StarIcon)`
  & .MuiSvgIcon-root {
    width: 2rem;
    height: 2rem;
  }
`;

const DealCountInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  padding-right: 5%;
`;

const DealCountInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5%;
  font-size: 1rem;
`;

const DealCount = styled.p`
  padding: 0 0.5rem 0 1rem;
  font-size: 2rem;
`;

//우측 명예의 전당 실적
const RightSmallContainer2 = styled(RightSmallContainer)`
  height: 11rem;
`;

const ToprankInfoContainer = styled.div`
  width: 90%;
  height: 30%;
  margin: 0.5rem 0;
  padding-left: 1rem;
  border-radius: 0.5rem;
  background: #342d56;
`;

const ToprankTitle = styled.p`
  padding-top: 0.2rem;
  font-size: 1.1rem;
  color: #dfdcef;
`;

const ToprankDate = styled.p`
  font-size: 0.9rem;
  color: #817c97;
`;

const TransactionHistory = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [pageNum, setPageNum] = useState(1);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum, 6);

  const handleChangePagination = (event, value) => {
    setPageNum(value);
  };

  return (
    <StyledWrapContainer>
      <AccordionContainer>
        {/*Accordion*/}
        <StyledAccordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <SummaryImg
              component="img"
              image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
            />
            <SummaryContents>
              <SummaryTitle>제가 정말 아끼는 녀석...</SummaryTitle>
              <SummaryUploadDate>2022.08.05</SummaryUploadDate>
              <SummaryParticipantsWrapper>
                <SummaryParticipantIcon color="secondary" />
                <SummaryParticipantsTxt>38명</SummaryParticipantsTxt>
              </SummaryParticipantsWrapper>
            </SummaryContents>
          </AccordionSummary>
          {/*AccordionDetails*/}
          <StyledAccordionDetails>
            <DetailsLeftContainer>
              <StyledCard sx={{ maxWidth: 280 }}>
                <StyledCardMediaImg
                  component="img"
                  image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
                />
                <CardContent>
                  <StyledTypography gutterBottom variant="h5" component="div">
                    나이키 조던
                  </StyledTypography>
                </CardContent>
                <StyledCardActions>
                  <StyledCardButton variant="contained" size="small">
                    상세보기
                  </StyledCardButton>
                </StyledCardActions>
              </StyledCard>
            </DetailsLeftContainer>
            <DetailsRightContainer>
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
            </DetailsRightContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
        {/*Pagination*/}
        <PaginationContainer>
          <StyledPagination
            count={myProductsData?.total_pages}
            page={pageNum}
            onChange={handleChangePagination}
          />
        </PaginationContainer>
      </AccordionContainer>
      {/*우측 contents*/}
      <RightContainer>
        <RightSmallContainer>
          랭크
          <RankInfo>S</RankInfo>
        </RightSmallContainer>
        <RightSmallContainer>
          내 평점
          <MyScopeInfoContainer>
            <MyScopeInfo fontSize='large'/>
            <MyScopeInfo fontSize='large'/>
          </MyScopeInfoContainer>
        </RightSmallContainer>
        <RightSmallContainer>
          거래 횟수
          <DealCountInfoContainer>
            <DealCountInfo>
              총<DealCount>50</DealCount>회
            </DealCountInfo>
          </DealCountInfoContainer>
        </RightSmallContainer>
        <RightSmallContainer2>
          명예의 전당 실적
          <ToprankInfoContainer>
            <ToprankTitle>이번주의 챔피온</ToprankTitle>
            <ToprankDate>2022.08.01</ToprankDate>
          </ToprankInfoContainer>
          <ToprankInfoContainer>
            <ToprankTitle>이번주의 챔피온</ToprankTitle>
            <ToprankDate>2022.08.01</ToprankDate>
          </ToprankInfoContainer>
        </RightSmallContainer2>
      </RightContainer>
    </StyledWrapContainer>
  );
};

export default TransactionHistory;