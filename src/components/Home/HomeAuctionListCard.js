import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import timeLimitHandler from 'utils/timeLimitHandler';
import ConditionalLink from 'components/ConditionalLink';
import { FinishedOverlay } from 'styles/StyledComponetStyles';

const Container = styled.div`
  margin: 2% 1.5%;
  width: 30%;
  position: relative;
`;

const CardContainer = styled(Card)`
  border-radius: 3rem !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__primary} !important;
  box-shadow: 0 0 4px 7px ${(props) =>
    props.theme.color_border__topleft} !important;
  :hover{
    transition: 0.5s;
    transform: translateY(-0.5rem);
  };
  }
`;

const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 1rem 1rem 1rem 1.5rem;
  align-items: center;
`;

const CardTopImg = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  border-radius: 50%;
  background: darkgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBottom = styled.div`
  width: 100%;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const PersonCntBox = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.3rem;
  width: 5rem;
  height: 2.4rem;
  background: transparent;
  border-radius: 4rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__number} !important;
`;

const EnterBox = styled(PersonCntBox)`
  display: ${(props) => (props.isFinished ? 'none' : '')};
  width: 7rem;
  text-align: center;
  border: none;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__success} !important;
`;

const MyCardMedia = styled(CardMedia)`
  object-fit: cover;
  height: 14rem;
`;

const MyCardHeader = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  font-size: 1.4rem;
  padding: 0.5rem;
`;

const FinishedCard = styled(FinishedOverlay)`
  border-radius: 3rem !important;
  box-shadow: 0 0 4px 7px ${(props) => props.theme.color_background__default} !important;
`;

const HomeAuctionListCard = ({ isFinished, auctionData }) => {
  return (
    <Container>
      <ConditionalLink
        to={`/auction/${auctionData.id}`}
        condition={!isFinished}
      >
        <CardContainer sx={{ maxWidth: '100%' }}>
          <MyCardMedia
            component="img"
            height="150"
            image={auctionData?.product?.thumbnail?.file}
          />
          <CardTop>
            <CardTopImg>profile</CardTopImg>
            <MyCardHeader>{auctionData?.title}</MyCardHeader>
          </CardTop>
          <CardBottom style={{ width: '100%' }}>
            <PersonCntBox>
              <PersonIcon />
              {auctionData?.product_groups_count}명
            </PersonCntBox>
            <EnterBox>{timeLimitHandler(auctionData?.end_at)}</EnterBox>
          </CardBottom>
        </CardContainer>
      </ConditionalLink>
      <FinishedCard isFinished={isFinished}>
        <p>종료된 경매입니다.</p>
      </FinishedCard>
    </Container>
  );
};

export default HomeAuctionListCard;
