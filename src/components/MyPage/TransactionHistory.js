import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useState } from 'react';
import ItemImg from '../../images/nike_jordan.jpg';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const StyledWrapContainer = styled.div`
  display: inline-flex !important;
  width: 100%;
  height: 100vh;
`;

const AccordionContainer = styled.div`
  width: 65%;
  margin-right: 10%;
`;

const StyledAccordion = styled(Accordion)`
  margin-bottom: 3%;
  background: ${(props) => props.theme.color_background__primary} !important;
`;

const SummaryImg = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 5%;
  border-radius: 10%;
  overflow: hidden;
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

const SummaryUploadDate = styled.h1`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__tertiary} !important;
`;

const SummaryParticipantsWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  padding-right: 2rem;
  background: paleyellow;
`;

const SummaryParticipantsIcon = styled.div`
  width: 5%;
  margin-right: 0.3rem;
`;

const SummaryParticipantsTxt = styled.h1`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color_font__number} !important;
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

const DetailsRightContainer = styled(DetailsLeftContainer)`
  width: 39%;
  margin-left: 12%;
`;

const RightContainer = styled.div`
  width: 25%;
  height: 100%;
`;

const RightSmallContainer = styled.div`
  width: 100%;
  height: 16%;
  margin-bottom: 1.5rem;
  padding-top: 5%;
  padding-left: 5%;
  border-radius: 7%;
  background: ${(props) => props.theme.color_background__primary}
`;

const RightSmallContainer2 = styled(RightSmallContainer)`
  height: 23%;
`;

const StyledImageListItem = styled(ImageListItem)`
  margin-right: 1rem;
  border-radius: 20%;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 20rem;
  margin-right: 2%;
  border-radius: 10%;
`;

const itemData = [
  {
    img: { ItemImg },
    title: 'ItemImg1',
  },
  {
    img: { ItemImg },
    title: 'ItemImg2',
  },
  {
    img: { ItemImg },
    title: 'ItemImg3',
  },
  {
    img: { ItemImg },
    title: 'ItemImg4',
  },
  {
    img: { ItemImg },
    title: 'ItemImg5',
  },
  {
    img: { ItemImg },
    title: 'ItemImg6',
  },
  {
    img: { ItemImg },
    title: 'ItemImg7',
  },
  {
    img: { ItemImg },
    title: 'ItemImg8',
  },
  {
    img: { ItemImg },
    title: 'ItemImg9',
  },
];



const TransactionHistory = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <StyledWrapContainer>
      <AccordionContainer>
        {/*1번째 아코디언*/}
        <StyledAccordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{borderRadius: 3}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <SummaryImg>
              <img src={ItemImg}></img>
            </SummaryImg>
            <SummaryContents>
              <SummaryTitle>제가 정말 아끼는 녀석...</SummaryTitle>
              <SummaryUploadDate>2022.08.05</SummaryUploadDate>
              <SummaryParticipantsWrapper>
                <SummaryParticipantsIcon>
                  <PersonOutlineOutlinedIcon color="secondary" />
                </SummaryParticipantsIcon>
                <SummaryParticipantsTxt>38명</SummaryParticipantsTxt>
              </SummaryParticipantsWrapper>
            </SummaryContents>
          </AccordionSummary>
          {/*AccordionDetails*/}
          <StyledAccordionDetails>
            <DetailsLeftContainer>
              <StyledCard sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  image={ItemImg}
                  alt="detail-item"
                />
                <CardContent>
                  <StyledTypography gutterBottom variant="h5" component="div">
                    나이키 조던
                  </StyledTypography>
                </CardContent>
                <StyledCardActions>
                  <Button variant="contained" size="small"
                    sx={{
                      borderRadius: 10,
                      color: 'black',
                      fontWeight: 'bold',
                      backgroundColor: '#D9D9D9',
                    }}>
                      상세보기
                  </Button>
                </StyledCardActions>
              </StyledCard>
            </DetailsLeftContainer>
            <DetailsRightContainer>
              <ImageList sx={{ width: 247, height: 247 }} cols={3} rowHeight={5}>
                {itemData.map((item) => (
                  <StyledImageListItem key={item.img}>
                    <StyledCardMedia
                      component="img"
                      image={ItemImg}
                      alt="detail-item"
                    />
                  </StyledImageListItem>
                ))}
              </ImageList>
            </DetailsRightContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
        {/*2번째 아코디언*/}
        <StyledAccordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{borderRadius: 3}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <SummaryImg>
              <img src={ItemImg}></img>
            </SummaryImg>
            <SummaryContents>
              <SummaryTitle>제가 정말 아끼는 녀석...</SummaryTitle>
              <SummaryUploadDate>2022.08.05</SummaryUploadDate>
              <SummaryParticipantsWrapper>
                <SummaryParticipantsIcon>
                  <PersonOutlineOutlinedIcon color="secondary" />
                </SummaryParticipantsIcon>
                <SummaryParticipantsTxt>38명</SummaryParticipantsTxt>
              </SummaryParticipantsWrapper>
            </SummaryContents>
          </AccordionSummary>
          {/*AccordionDetails*/}
          <StyledAccordionDetails>
            <DetailsLeftContainer>
              <StyledCard sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  image={ItemImg}
                  alt="detail-item"
                />
                <CardContent>
                  <StyledTypography gutterBottom variant="h5" component="div">
                    나이키 조던
                  </StyledTypography>
                </CardContent>
                <StyledCardActions>
                  <Button variant="contained" size="small"
                    sx={{
                      borderRadius: 10,
                      color: 'black',
                      fontWeight: 'bold',
                      backgroundColor: '#D9D9D9',
                    }}>
                      상세보기
                  </Button>
                </StyledCardActions>
              </StyledCard>
            </DetailsLeftContainer>
            <DetailsRightContainer>
              <ImageList sx={{ width: 247, height: 247 }} cols={3} rowHeight={5}>
                {itemData.map((item) => (
                  <StyledImageListItem key={item.img}>
                    <StyledCardMedia
                      component="img"
                      image={ItemImg}
                      alt="detail-item"
                    />
                  </StyledImageListItem>
                ))}
              </ImageList>
            </DetailsRightContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
        {/*3번째 아코디언*/}
        <StyledAccordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          sx={{borderRadius: 3}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <SummaryImg>
              <img src={ItemImg}></img>
            </SummaryImg>
            <SummaryContents>
              <SummaryTitle>제가 정말 아끼는 녀석...</SummaryTitle>
              <SummaryUploadDate>2022.08.05</SummaryUploadDate>
              <SummaryParticipantsWrapper>
                <SummaryParticipantsIcon>
                  <PersonOutlineOutlinedIcon color="secondary" />
                </SummaryParticipantsIcon>
                <SummaryParticipantsTxt>38명</SummaryParticipantsTxt>
              </SummaryParticipantsWrapper>
            </SummaryContents>
          </AccordionSummary>
          {/*AccordionDetails*/}
          <StyledAccordionDetails>
            <DetailsLeftContainer>
              <StyledCard sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  image={ItemImg}
                  alt="detail-item"
                />
                <CardContent>
                  <StyledTypography gutterBottom variant="h5" component="div">
                    나이키 조던
                  </StyledTypography>
                </CardContent>
                <StyledCardActions>
                  <Button variant="contained" size="small"
                    sx={{
                      borderRadius: 10,
                      color: 'black',
                      fontWeight: 'bold',
                      backgroundColor: '#D9D9D9',
                    }}>
                      상세보기
                  </Button>
                </StyledCardActions>
              </StyledCard>
            </DetailsLeftContainer>
            <DetailsRightContainer>
              <ImageList sx={{ width: 247, height: 247 }} cols={3} rowHeight={5}>
                {itemData.map((item) => (
                  <StyledImageListItem key={item.img}>
                    <StyledCardMedia
                      component="img"
                      image={ItemImg}
                      alt="detail-item"
                    />
                  </StyledImageListItem>
                ))}
              </ImageList>
            </DetailsRightContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
        {/*4번째 아코디언*/}
        <StyledAccordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          sx={{borderRadius: 3}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <SummaryImg>
              <img src={ItemImg}></img>
            </SummaryImg>
            <SummaryContents>
              <SummaryTitle>제가 정말 아끼는 녀석...</SummaryTitle>
              <SummaryUploadDate>2022.08.05</SummaryUploadDate>
              <SummaryParticipantsWrapper>
                <SummaryParticipantsIcon>
                  <PersonOutlineOutlinedIcon color="secondary" />
                </SummaryParticipantsIcon>
                <SummaryParticipantsTxt>38명</SummaryParticipantsTxt>
              </SummaryParticipantsWrapper>
            </SummaryContents>
          </AccordionSummary>
          {/*AccordionDetails*/}
          <StyledAccordionDetails>
            <DetailsLeftContainer>
              <StyledCard sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  image={ItemImg}
                  alt="detail-item"
                />
                <CardContent>
                  <StyledTypography gutterBottom variant="h5" component="div">
                    나이키 조던
                  </StyledTypography>
                </CardContent>
                <StyledCardActions>
                  <Button variant="contained" size="small"
                    sx={{
                      borderRadius: 10,
                      color: 'black',
                      fontWeight: 'bold',
                      backgroundColor: '#D9D9D9',
                    }}>
                      상세보기
                  </Button>
                </StyledCardActions>
              </StyledCard>
            </DetailsLeftContainer>
            <DetailsRightContainer>
              <ImageList sx={{ width: 247, height: 247 }} cols={3} rowHeight={5}>
                {itemData.map((item) => (
                  <StyledImageListItem key={item.img}>
                    <StyledCardMedia
                      component="img"
                      image={ItemImg}
                      alt="detail-item"
                    />
                  </StyledImageListItem>
                ))}
              </ImageList>
            </DetailsRightContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
      </AccordionContainer>
      {/*우측 contents*/}
      <RightContainer>
        <RightSmallContainer>랭크</RightSmallContainer>
        <RightSmallContainer>내 평점</RightSmallContainer>
        <RightSmallContainer>거래 횟수</RightSmallContainer>
        <RightSmallContainer2>명예의 전당 실적</RightSmallContainer2>
      </RightContainer>
    </StyledWrapContainer>
  );
};

export default TransactionHistory;
