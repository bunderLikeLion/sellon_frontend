import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardMedia from '@mui/material/CardMedia';
import PersonIcon from '@mui/icons-material/Person';
import ConditionalLink from 'components/ConditionalLink';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const CardContainer = styled(Card)`
  position: relative;
  border-radius: 1rem !important;
  max-width: calc((100% - 6rem) / 4);
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc((100% - 6rem) / 4);
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__primary} !important;
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

const StyledCardMedia = styled(CardMedia)`
  object-fit: cover;
  height: 8rem;

  @media screen and (max-width: 1300px) {
    height: 10rem;
  }

  @media screen and (max-width: 1000px) {
    height: 12rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: start;
  padding: 0.8rem 1rem 0.2rem 1rem;
  align-items: center;
  width: 100%;
`;

const UserAvatar = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #c9c9c9;
`;

const CardHeaderTitle = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  font-size: 1.2rem;
  padding: 0.5rem 0 0.5rem 0.7rem;
`;

const CardFooter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.3rem 1rem;
`;

const ParticipantLabel = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 5rem;
  height: 2.4rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__number} !important;
  background: transparent;
`;

const PeriodLabel = styled.span`
  width: fit-content;
  padding: 0.25rem 0.8rem;
  text-align: center;
  border-radius: 4rem;
  border: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__success} !important;
`;

const StyledCancelOutlinedIcon = styled(CancelOutlinedIcon)`
  position: absolute !important;
  right: 1rem;
  margin-top: 0.5rem !important;
  border-radius: 50rem !important;
  font-size: 2rem !important;
`;

export const FinishedOverlay = styled(Card)`
  display: ${(props) => (props.isFinished ? 'flex' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  background: rgba(30, 30, 30, 0.8) !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
  font-size: 1.5rem;
`;

export const FinishedCard = styled(FinishedOverlay)`
  border-radius: 1rem !important;
  box-shadow: 0 0 4px 7px ${(props) => props.theme.color_background__default} !important;
`;

/*
  title: 경매 제목
  thumbnail_url: 이미지 url
  participantCount: 경매 참여자 수
  period: 남은 기간
  isInterestedList: 관심 경매에서 사용되는지 여부
*/
const AuctionListItem = ({
  title,
  thumbnailUrl,
  participantCount,
  period,
  isFinished,
  displayInterestedBtn,
  linkTo,
  linkCondition,
}) => {

  /*
    TODO: 카드 상단 이미지가 너무 높이가 하단 컨텐츠에 비해 낮다. 늘려야한다.
    이때, 반응형 수치도 고려 헤야 함.
  */

  /*
    TODO: 당일 종료, D-1 등의 라벨을 좌측 상단으로 이동
    경매 시작일자 및 사람수가 아래에 노출되게 하기
  */
  return (
    <CardContainer>
      {/* TODO: 관심 경매 하트 아이콘으로 교체 및 관심 경매 API 연결하기 */}
      {displayInterestedBtn && (
        <StyledCancelOutlinedIcon />
      )}
      <ConditionalLink
        to={linkTo}
        condition={linkCondition}
      >
        <StyledCardMedia
          component="img"
          height="150"
          image={thumbnailUrl}
        />
        <CardHeader>
          <UserAvatar />
          <CardHeaderTitle>
            {title}
          </CardHeaderTitle>
        </CardHeader>
        <CardFooter>
          <ParticipantLabel>
            <PersonIcon />
            {participantCount}명
          </ParticipantLabel>
          <PeriodLabel>
            {period}
          </PeriodLabel>
        </CardFooter>
      </ConditionalLink>
      <FinishedCard isFinished={isFinished}>
        <p>종료된 경매입니다.</p>
      </FinishedCard>
    </CardContainer>
  )
};

export default AuctionListItem;
