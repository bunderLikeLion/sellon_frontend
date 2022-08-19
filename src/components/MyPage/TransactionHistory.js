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
import { Link } from 'react-router-dom';
import { useMyProductsQuery } from 'queries/product';
import { useDealingHistoryQuery } from 'queries/dealing';
import EmptyHistoryPlaceholder from 'components/Shared/EmptyHistoryPlaceholder';
import { useRatingQuery, useDealingCountQuery } from 'queries/user';
import dateFormatter from '../../utils/dateFormatter';
import AuctionDetailModal from '../Auction/AuctionDetail/AuctionDetailModal';

//최상위 컨테이너
const StyledWrapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 2rem;
  margin-top: 1rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
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
  height: 5rem !important;
  width: 5rem !important;
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
  cursor: pointer;
`;

const SummaryContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SummaryTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const SummaryUploadDate = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color_font__tertiary} !important;
`;

const SummaryParticipantsWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
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
const StyledAccordionContainer = styled.div`
  flex: 3;
  border-radius: 1rem;
`;

const StyledAccordion = styled(Accordion)`
  border-radius: 0.5rem !important;
  background: ${(props) => props.theme.color_background__primary} !important;
  margin-bottom: 1.5rem;
  &.Mui-expanded {
    margin: 0px 0px 1rem 0px !important;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  & .MuiAccordionSummary-content {
    padding: 0 1.5rem;
  }
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  fill: ${(props) => props.theme.color_white} !important;
`;

const SummaryParticipantcontainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 2rem 1.5rem 2.3rem !important;
`;

const DetailsLeftContainer = styled.div`
  width: 45%;
`;

const StyledCardContent = styled(CardContent)`
  & .MuiCardContent-root {
    color: red;
  }
`;

const StyledCard = styled(Card)`
  overflow: hidden;
  border-radius: 0.7rem !important;
  background: ${(props) => props.theme.color_background__third} !important;
`;

const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.color_font__secondary} !important;
  margin-bottom: 0 !important;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
  padding: 0.5rem 1rem 1rem 1.5rem !important;
`;

const StyledCardButton = styled(Button)`
  width: 6rem;
  border-radius: 1rem !important;
  border: none !important;
  background: ${(props) => props.theme.color_button__ok} !important;
  overflow: hidden !important;
  font-weight: bold !important;
  color: black !important;

  :hover {
    box-shadow: 0 0.7em 0.7em -0.4em ${(props) => props.theme.color_background__default} !important;
  }
`;

const DetailsRightContainer = styled(DetailsLeftContainer)`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 41%;
  margin-left: 10%;
`;

//전체화면 우측 영역
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.6rem;
  @media screen and (max-width: 1000px) {
    flex-direction: row;
  }
`;

const RightSmallContainer = styled.div`
  position: relative;
  flex: 1;
  height: 6rem;
  max-height: 6rem;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const RankInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  padding-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

const MyScopeInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const MyScopeInfo = styled(StarIcon)`
  &.MuiSvgIcon-root {
    width: 2rem;
    height: 2rem;
  }

  color: ${(props) =>
    props.fill ? props.theme.color_fill_start : '#7B749D'} !important;

  @media screen and (max-width: 1000px) {
    &.MuiSvgIcon-root {
      font-size: 1.5rem !important;
      width: 1.5rem !important;
      height: 1.5rem !important;
    }
  }

  @media screen and (max-width: 700px) {
    &.MuiSvgIcon-root {
      font-size: 1.2rem !important;
      width: 1.2rem !important;
      height: 1.2rem !important;
    }
  }
`;

const DealCountInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
`;

const DealCountInfo = styled.div`
  display: inline-flex;
  flex-direction: flex-start;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  span {
    padding-top: 0.5rem;
  }
`;

const DealCount = styled.p`
  padding: 0 1rem 0 1rem;
  font-size: 2rem;
`;

const ToprankInfoContainer = styled(RightSmallContainer)`
  height: fit-content;
`;

const ToprankInfoItem = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  background: #342d56;
`;

const ToprankTitle = styled.p`
  padding-top: 0.2rem;
  font-size: 0.8rem;
  color: #dfdcef;
`;

const ToprankDate = styled.p`
  font-size: 0.7rem;
  color: #817c97;
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  //margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const TransactionHistory = () => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isTriggeredFromBig, setIsTriggeredFromBig] = useState(null);
  const [singleItemInfo, setSingleItemInfo] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [pageNum, setPageNum] = useState(1);

  const { data: dealingHistory, isSuccess: dealingHistoryFetched } =
    useDealingHistoryQuery(pageNum);

  const { data: dealingCountData, isSuccess: dealingCountDataFetched } =
    useDealingCountQuery();

  const { data: userRating, isSuccess: userRatingFetched } = useRatingQuery();

  const MAX_RATING = 5;
  const rating = () => {
    const result = [];
    const roundRating = Math.round(userRating.rating);
    for (let i = 0; i < MAX_RATING; i++) {
      i < roundRating
        ? result.push(<MyScopeInfo fontSize="large" fill={true} />)
        : result.push(<MyScopeInfo fontSize="large" />);
    }
    return result;
  };

  const handleChangePagination = (event, value) => {
    setPageNum(value);
  };

  const handleModal = () => setIsModalOpened(!isModalOpened);

  return (
    <StyledWrapContainer>
      <StyledAccordionContainer>
        {/*Accordion*/}
        {dealingHistoryFetched && (
          <>
            {dealingHistory?.total_count > 0 ? (
              <HistoryContainer>
                {dealingHistory.results.map((historyData, index) => {
                  return (
                    <StyledAccordion
                      expanded={expanded === `panel${index}`}
                      onChange={handleChange(`panel${index}`)}
                    >
                      <StyledAccordionSummary
                        expandIcon={<StyledExpandMoreIcon />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                      >
                        <SummaryImg
                          component="img"
                          image={historyData.auction.product.thumbnail?.file}
                          onClick={() =>
                            setSingleItemInfo(historyData?.auction?.product)
                          }
                        />
                        <SummaryContents>
                          <SummaryTitle>
                            {historyData.auction?.title}
                          </SummaryTitle>

                          <SummaryParticipantsWrapper>
                            <SummaryUploadDate>
                              {dateFormatter(historyData.created_at)}
                            </SummaryUploadDate>
                            <SummaryParticipantcontainer>
                              <SummaryParticipantIcon color="secondary" />
                              <SummaryParticipantsTxt>
                                {historyData.auction.product_groups_count}명
                              </SummaryParticipantsTxt>
                            </SummaryParticipantcontainer>
                          </SummaryParticipantsWrapper>
                        </SummaryContents>
                      </StyledAccordionSummary>
                      {/*AccordionDetails*/}
                      <StyledAccordionDetails>
                        <DetailsLeftContainer>
                          <StyledCard sx={{ maxWidth: 280 }}>
                            <StyledCardMediaImg
                              component="img"
                              image={
                                historyData.auction.product.thumbnail?.file
                              }
                            />
                            <StyledCardContent>
                              <StyledTypography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {historyData.auction.product.name}
                              </StyledTypography>
                            </StyledCardContent>
                            <StyledCardActions>
                              {/*                              <Link
                                to={`/itemdetail/${historyData.auction.product.id}`}
                              >*/}
                              <StyledCardButton
                                variant="contained"
                                size="small"
                                onClick={() => {
                                  setSingleItemInfo(
                                    historyData?.auction?.product
                                  );
                                  handleModal();
                                }}
                              >
                                상세보기
                              </StyledCardButton>
                              {/*</Link>*/}
                            </StyledCardActions>
                          </StyledCard>
                        </DetailsLeftContainer>
                        <DetailsRightContainer>
                          {historyData?.product_group?.products.map(
                            (singleProduct) => {
                              return (
                                <StyledDetailItemImg
                                  component="img"
                                  image={singleProduct?.thumbnail?.file}
                                  onClick={() => {
                                    setSingleItemInfo(singleProduct);
                                    handleModal();
                                  }}
                                />
                              );
                            }
                          )}
                        </DetailsRightContainer>
                      </StyledAccordionDetails>
                    </StyledAccordion>
                  );
                })}
              </HistoryContainer>
            ) : (
              <EmptyHistoryPlaceholder
                message="한 번 경매장에 참여해볼까요?"
                margin="0"
              />
            )}
          </>
        )}

        {/*Pagination*/}
        <PaginationContainer>
          <StyledPagination
            // count={dealingHistory?.total_pages}
            page={pageNum}
            onChange={handleChangePagination}
          />
        </PaginationContainer>
      </StyledAccordionContainer>
      {/*우측 contents*/}
      <RightContainer>
        <RightSmallContainer>
          <span>랭크</span>
          <RankInfo>S</RankInfo>
        </RightSmallContainer>
        <RightSmallContainer>
          <span>내 평점</span>
          {/* TODO: border만 있는 별을 기본적으로 5개 띄우고 점수에따라 차있는 별 아이콘을 쓰기 */}
          <MyScopeInfoContainer>
            {userRatingFetched && rating()}
          </MyScopeInfoContainer>
        </RightSmallContainer>
        <RightSmallContainer>
          <span>거래 횟수</span>
          <DealCountInfoContainer>
            <DealCountInfo>
              <span>총</span>
              <DealCount>{dealingCountData.count}</DealCount>
              <span>회</span>
            </DealCountInfo>
          </DealCountInfoContainer>
        </RightSmallContainer>
        {/*
          <ToprankInfoContainer>
            명예의 전당 실적
            <ToprankInfoItem>
              <ToprankTitle>이번주의 챔피온</ToprankTitle>
              <ToprankDate>2022.08.01</ToprankDate>
            </ToprankInfoItem>
            <ToprankInfoItem>
              <ToprankTitle>이번주의 챔피온</ToprankTitle>
              <ToprankDate>2022.08.01</ToprankDate>
            </ToprankInfoItem>
          </ToprankInfoContainer>

        */}
      </RightContainer>
      {/*detail modal*/}
      <AuctionDetailModal
        handleModal={handleModal}
        isModalOpened={isModalOpened}
        isTriggeredFromBigImg={isTriggeredFromBig && true}
        smallImgRelatedItemId={!isTriggeredFromBig && singleItemInfo?.id}
        singleItemInfo={singleItemInfo}
      />
    </StyledWrapContainer>
  );
};

export default TransactionHistory;
