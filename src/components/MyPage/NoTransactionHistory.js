//개인페이지-히스토리 없을 경우

import styled from 'styled-components';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


//최상위 컨테이너
const StyledWrapContainer = styled.div`
  display: inline-flex !important;
  width: 100%;
  height: 100%;
`;

//전체화면 좌측 영역
const LeftContainer = styled.div`
  display: flex;
  width: 65%;
  height: 35rem;
  margin-right: 10%;
  border-radius: 1rem;
  justify-content: center !important;
  align-items: center;
  background: ${(props) => props.theme.color_background__primary} !important;
`;

const LeftContainerTxt = styled.h1`
  font-size: 1rem;
  text-align: center !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const StyledLinkBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color_font__secondary} !important;
  border-bottom: 1px solid ${(props) => props.theme.color_font__secondary} !important;
`;

//전체화면 우측 영역
const RightContainer = styled.div`
  width: 25%;
`;

const RightSmallContainer = styled.div`
  width: 100%;
  height: 7rem;
  margin-bottom: 1rem;
  padding-top: 5%;
  padding-left: 5%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary}
`;

//우측 명예의 전당 실적
const RightSmallContainer2 = styled(RightSmallContainer)`
  height: 11rem;
`;


const TransactionHistory = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <StyledWrapContainer>
      {/*좌측 contents*/}
      <LeftContainer>
        <LeftContainerTxt>
          진행중인 거래가 없습니다.
          <StyledLinkBox
            sx={{ typography: 'body1', '& > :not(style) + :not(style)': { ml: 2, }, }}
            onClick={(event) => event.preventDefault()}
          >
            <StyledLink href="#" underline="none">
              {'거래를_만들러_가봅시다!'}
            </StyledLink>
          </StyledLinkBox>
        </LeftContainerTxt>
      </LeftContainer>
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