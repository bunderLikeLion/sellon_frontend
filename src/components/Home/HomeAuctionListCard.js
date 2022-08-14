import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import timeLimitHandler from 'utils/timeLimitHandler';
import ConditionalLink from 'components/ConditionalLink';
import { FinishedOverlay } from 'styles/StyledComponetStyles';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../states';

const Container = styled.div`
  position: relative;
  margin: 2% 1.5%;
  width: 30%;
`;

const CardContainer = styled(Card)`
  border-radius: 3rem !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__primary} !important;
  box-shadow: 0 0 4px 7px ${(props) => props.theme.color_border__topleft} !important;
  :hover {
    transition: 0.5s;
    transform: translateY(-0.5rem);
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem 1rem 1.5rem;
`;

const CardTopImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  border-radius: 50%;
  background: darkgray;
`;

const CardBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem 1rem 1rem;
`;

const PersonCntBox = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 5rem;
  height: 2.4rem;
  margin: 0.3rem;
  border-radius: 4rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__number} !important;
  background: transparent;
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
  height: 14rem;
  object-fit: cover;
`;

const MyCardHeader = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis !important;
  padding: 0.5rem;
  font-size: 1.4rem;
`;

const FinishedCard = styled(FinishedOverlay)`
  border-radius: 3rem !important;
  box-shadow: 0 0 4px 7px ${(props) => props.theme.color_background__default} !important;
`;

const HomeAuctionListCard = ({ isFinished, auctionData }) => {
  const user = useRecoilValue(userAtom);

  return (
    <Container>
      <ConditionalLink
        to={
          auctionData?.owner?.id === user?.pk
            ? `/auctioneer/${auctionData.id}/${auctionData?.product?.id}`
            : `/auction/${auctionData?.id}`
        }
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
