import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
`;

const MainIntroduceContainer = styled(SectionContainer)`
  margin-top: 2rem;
  padding-top: 4rem;

  @media screen and (max-width: 1000px) {
    padding: 4rem 1rem 2rem 1rem;
  }
  @media screen and (max-width: 500px) {
    padding: 4rem 0 2rem 0;
  }
`;

const ServiceIntroduceContainer = styled(SectionContainer)`
  background: ${(props) => props.theme.color_background__primary};
`;

const BestDealingContainer = styled(SectionContainer)``;

const FAQContainer = styled(SectionContainer)`
  background: ${(props) => props.theme.color_background__primary};
`;

const ParticipantBannerContainer = styled(SectionContainer)``;

const MainTitle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color_font__primary};
  font-size: 2.3rem;
  line-height: 2.5rem;
  font-weight: 800;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    line-height: 2.2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

const MainIntroduceButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-top: 2rem;

  @media screen and (max-width: 1000px) {
    gap: 2rem;
  }
  @media screen and (max-width: 500px) {
    gap: 1rem;
  }
`;

const AuctionButton = styled.button`
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__primary};
  border: none;
  padding: .7rem .8rem;
  font-size: 1.1rem;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
`;

const TopRankButton = styled.button`
  background: none;
  color: ${(props) => props.theme.color_font__primary};
  border: none;
  padding: 1rem;
  font-size: 1.1rem;

  :hover {
    text-decoration: underline;
  }
`;

const MainImageContainer = styled.div``;

const MainImage = styled.img``;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1060px !important;
  width: 100%;
  gap: 4rem;
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 5rem;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column;

    &:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

const ServiceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc((100% - 5rem) / 2);

  @media screen and (max-width: 700px) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }
`;

const ServiceMediaContainer = styled.div`
  background-color: aliceblue;
  height: 20rem;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc((100% - 5rem) / 2);

  @media screen and (max-width: 700px) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }
`;

const SubLabel = styled.span`
  background: ${(props) => props.theme.color_background__success};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
`;

const ItemTitle = styled.h2`
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.color_font__primary};
`;

const ServiceDescription = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4rem;

  color: ${(props) => props.theme.color_font__tertiary};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc((100% - 5rem) / 2);

  @media screen and (max-width: 700px) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }
`;

const BestDealingList = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const BestDealingItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  background: ${(props) => props.theme.color_background__success};
  padding: 2rem;
  width: fit-content;
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: 100%;
  }
`;

const BestDealingItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
`;

const UserName = styled.div`
  font-size: 1.4rem;
  color: ${(props) => props.theme.color_font__primary};
  font-weight: 600;
`;

const UserComment = styled.p`
  padding: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const UserAvatarContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  overflow: hidden;
`;

const UserAvatar = styled.img``;

const AccordionContainer = styled.div`
  padding: 2rem 0rem;
`;

const StyledAccordion = styled(Accordion)`
  background: ${(props) => props.theme.color_background__primary} !important;
  color: ${(props) => props.theme.color_white} !important;
  padding: .5rem !important;
  border-top: 1px solid ${(props) => props.theme.color_border__topleft};
  box-shadow: none !important;
  svg {
    fill: ${(props) => props.theme.color_white} !important;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  background: ${(props) => props.theme.color_background__primary} !important;
`;

const AccordionTitle = styled(Typography)`
  font-size: 1.2rem !important;
  padding-left: 1rem;
`;

const AccordionContent = styled(Typography)`
  padding: 1rem 1rem 1.5rem 2rem;
`;

const AccordionContentFirst = styled(Typography)`
  padding: 1rem;
`;

const ParticipantBanner = styled.div`
  padding: 2rem 5rem;
  background: ${(props) => props.theme.color_button__delete} !important;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;

  @media screen and (max-width: 700px) {
    padding: 1.5rem 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const BannerText = styled.h2`
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};

  @media screen and (max-width: 700px) {
    font-size: 1.1rem;
    width: 100%;
  }
`;

const ParticipantButton = styled(AuctionButton)`
  background: ${(props) => props.theme.color_button__ok};
  padding: 0.6rem 1.4rem;
`;

const ParticipantButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: center;
  }
`;

const About = () => {
  return (
    <Container>
      {/* 메인 배너 */}
      <MainIntroduceContainer>
        <MainTitle>
          나에게 의미없는 잡동사니, <br />
          누군가에게는 소중한 보배가 될 수 있다.
        </MainTitle>

        <MainIntroduceButtonContainer>
          <Link to="/auction">
            <AuctionButton>경매장으로 가기</AuctionButton>
          </Link>
          <Link to="/toprank">
            <TopRankButton>지금까지의 거래 구경하러 가기</TopRankButton>
          </Link>
        </MainIntroduceButtonContainer>

        <MainImageContainer>
          <MainImage />
        </MainImageContainer>
      </MainIntroduceContainer>

      {/* 서비스 소개 영역*/}
      <ServiceIntroduceContainer>
        <ServiceList>
          <ServiceItem>
            <ServiceTextContainer>
              <SubLabel>
                물물 경매
              </SubLabel>
              <ItemTitle>
                경매 , 이젠 물건으로
              </ItemTitle>
              <ServiceDescription>
                sellon에서 돈이 아닌 물건으로<br />
                경매를 열어보세요.<br />
                <br />
                뜻밖의 기회에 원해왔던 물건을 찾을 수 있습니다.
              </ServiceDescription>
            </ServiceTextContainer>
            <ServiceMediaContainer>
            </ServiceMediaContainer>
          </ServiceItem>

          <ServiceItem>
            <ServiceMediaContainer>
            </ServiceMediaContainer>
            <ServiceTextContainer>
              <SubLabel>
                개성 넘치는 경매
              </SubLabel>
              <ItemTitle>
                경매, 일상 속의 물건으로
              </ItemTitle>
              <ServiceDescription>
                sellon은 무거운 분위기의 경매장이 아닙니다.<br />
                언제든지 개성 넘치는 물건들을 거래할 수 있습니다.
              </ServiceDescription>
            </ServiceTextContainer>
          </ServiceItem>
        </ServiceList>
      </ServiceIntroduceContainer>

      {/* 특이한 거래 영역 */}
      <BestDealingContainer>
        <TitleContainer>
          <SubLabel>
            엄청난 거래도 해낼 수 있는 경매
          </SubLabel>
          <ItemTitle>
            세상에, 나 어쩌면 릭 아저씨보다 더 대단할지도.
          </ItemTitle>
        </TitleContainer>

        <BestDealingList>
          <BestDealingItem>
            <BestDealingItemHeader>
              <UserAvatarContainer>
                <UserAvatar src="https://api.sellon.link/static/avatars/1.jpg"/>
              </UserAvatarContainer>
              <UserName>
                김유민
              </UserName>
            </BestDealingItemHeader>
            <UserComment>
              한정판 굿즈를 저에게 필요없던 물건들과 바꾸어 얻게 돼서 기뻐요!
            </UserComment>
          </BestDealingItem>

          <BestDealingItem>
            <BestDealingItemHeader>
              <UserAvatarContainer>
                <UserAvatar src="https://api.sellon.link/static/avatars/4.jpg"/>
              </UserAvatarContainer>
              <UserName>
                이승환
              </UserName>
            </BestDealingItemHeader>
            <UserComment>
              이번 거래로 원하던 만년필을 얻게 되었어요!
            </UserComment>
          </BestDealingItem>
        </BestDealingList>
      </BestDealingContainer>

      <FAQContainer>
        <TitleContainer>
          <SubLabel>
            FAQ
          </SubLabel>
          <ItemTitle>
            자주 묻는 질문
          </ItemTitle>
        </TitleContainer>

        <AccordionContainer>
          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>
                Q. 물건은 어떻게 등록하나요?
              </AccordionTitle>
            </StyledAccordionSummary>
            <AccordionDetails>
              <AccordionContentFirst>
                1. 경매장 페이지 우상단의 경매 올리기로 경매 작성 페이지로 가주세요.<br></br>
                2. 경매 열기 페이지의 양식을 작성한 후 경매를 발행해주세요. 😎
              </AccordionContentFirst>
            </AccordionDetails>
          </StyledAccordion>

          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <AccordionTitle>
                Q. 경매를 낙찰한 이후, 어떻게 낙찰자와 연락하나요?
              </AccordionTitle>
            </StyledAccordionSummary>
            <AccordionContent>
              <Typography>
                개인페이지 &gt; 진행중인 거래 탭에 참여자와 연락할 수 있는 채팅 기능이 마련되어져 있어요. <br /> 채팅으로 참여자와 편하게 연락하세요!😉
              </Typography>
            </AccordionContent>
          </StyledAccordion>

          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <AccordionTitle>
                Q. 경매를 올렸는데 마음에 드는 참여자가 없습니다. 이럴때는 어떡하죠?
              </AccordionTitle>
            </StyledAccordionSummary>
            <AccordionContent>
              <Typography>
                안타깝지만 내가 올린 경매의 상세 페이지에서 ‘폐기’ 버튼을 눌러서, 물건을 고르지 않고 경매를 바로 종료할 수 있습니다.
              </Typography>
            </AccordionContent>
          </StyledAccordion>

          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <AccordionTitle>
                Q. sellon의 경매에서는 돈을 사용해 경매에 참여할 순 없나요?
              </AccordionTitle>
            </StyledAccordionSummary>
            <AccordionContent>
              <Typography>
                네, 없습니다! sellon은 ‘물물’경매를 위한 사이트로 돈과 관련된 기능은 없습니다.☺️
              </Typography>
            </AccordionContent>
          </StyledAccordion>

          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <AccordionTitle>
                Q. 경매를 만들 때 여러 물건을 한번에 올릴 수 없나요?
              </AccordionTitle>
            </StyledAccordionSummary>
            <AccordionContent>
              <Typography>
                경매를 열 때는 한번에 물건 한 개만 등록해주세요.
              </Typography>
            </AccordionContent>
          </StyledAccordion>

        </AccordionContainer>
      </FAQContainer>
      <ParticipantBannerContainer>
        <ParticipantBanner>
          <BannerText>
            개성넘치는 경매장, Sellon. 지금 바로 참여해보세요.
          </BannerText>
          <ParticipantButtonContainer>
            <Link to="/auction">
              <ParticipantButton>참여하기</ParticipantButton>
            </Link>
          </ParticipantButtonContainer>
        </ParticipantBanner>
      </ParticipantBannerContainer>
    </Container>
  );
};

export default About;
