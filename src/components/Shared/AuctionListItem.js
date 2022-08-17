import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardMedia from '@mui/material/CardMedia';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConditionalLink from 'components/ConditionalLink';
import {
  useCreateInterestedAuctionMutation,
  useDeleteInterestedAuctionMutation,
} from 'queries/auction';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

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
  padding: 0.8rem 1.2rem 0.2rem 1.2rem;
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
  padding: 0.5rem 0.7rem;
`;

const CardFooter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.3rem 1.2rem;
`;

const ParticipantLabel = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 5rem;
  height: 2.4rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__number} !important;
  background: transparent;
`;

const StartDateLabel = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__tertiary} !important;
`;

const PeriodLabel = styled.span`
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: fit-content;
  padding: 0.3rem 0.8rem;
  text-align: center;
  border-radius: 4rem;
  border: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__success} !important;
`;

const InterestedButton = styled.button`
  position: absolute !important;
  right: 1rem;
  margin-top: 0.5rem !important;
  border-radius: 50rem !important;
  font-size: 2rem !important;
  background: none;
  border: none;
  color: ${(props) => props.theme.color_white};
`;

export const FinishedOverlay = styled(Card)`
  display: ${(props) => (props.isFinished ? 'block' : 'none')};
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

const StyledFavoriteBorderIcon = styled(FavoriteIcon)`
  color: ${(props) =>
    props.isInterested
      ? props.theme.color_font__number
      : props.theme.color_font__disabled};

  & :hover {
    transform: scale(1.2);
  }
`;

const OverLayIconBox = styled.div`
  position: relative;
  height: 50%;
`;

const FinishedMessage = styled.p`
  font-size: 1.3rem;
  text-align: center;
`;

/*
  title: 경매 제목
  thumbnail_url: 이미지 url
  participantCount: 경매 참여자 수
  period: 남은 기간
  isFinished: 종료된 경매 여부
  isInterested: 관심 경매 여부
  displayInterestedBtn: 관심 경매 등록 버튼 노출 여부
  linkTo: 연결 링크
  linkCondition: 링크 조건
*/
const AuctionListItem = ({
  id,
  title,
  thumbnailUrl,
  participantCount,
  period,
  startAt,
  isFinished,
  isInterested,
  displayInterestedBtn,
  linkTo,
  linkCondition,
}) => {
  /*
    TODO: 카드 상단 이미지가 너무 높이가 하단 컨텐츠에 비해 낮다. 늘려야한다.
    이때, 반응형 수치도 고려 헤야 함.
  */

  const user = useRecoilValue(userAtom);

  const { mutate: createInterestedAuction } =
    useCreateInterestedAuctionMutation();
  // auctionId

  const { mutate: deleteInterestedAuction } =
    useDeleteInterestedAuctionMutation();

  const pressHeartIconFunc = (isInterested) => {
    isInterested ? deleteInterestedAuction(id) : createInterestedAuction(id);
  };

  return (
    <CardContainer>
      {/* TODO: 관심 경매 API 연결하기 */}
      {user && displayInterestedBtn && !isFinished && (
        <InterestedButton>
          <StyledFavoriteBorderIcon
            isInterested={isInterested}
            onClick={() => pressHeartIconFunc(isInterested)}
          />
        </InterestedButton>
      )}

      <PeriodLabel>{period}</PeriodLabel>
      <ConditionalLink to={linkTo} condition={linkCondition}>
        <StyledCardMedia component="img" height="150" image={thumbnailUrl} />
        <CardHeader>
          <UserAvatar />
          <CardHeaderTitle>{title}</CardHeaderTitle>
        </CardHeader>
        <CardFooter>
          <StartDateLabel>{startAt}</StartDateLabel>
          <ParticipantLabel>
            <PersonIcon />
            {participantCount}명
          </ParticipantLabel>
        </CardFooter>
      </ConditionalLink>
      <FinishedCard isFinished={isFinished}>
        {displayInterestedBtn && (
          <OverLayIconBox>
            {user && (
              <InterestedButton>
                <StyledFavoriteBorderIcon
                  isInterested={isInterested}
                  onClick={() => pressHeartIconFunc(isInterested)}
                />
              </InterestedButton>
            )}
          </OverLayIconBox>
        )}
        <FinishedMessage>종료된 경매입니다.</FinishedMessage>
      </FinishedCard>
    </CardContainer>
  );
};

export default AuctionListItem;
