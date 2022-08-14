import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ConditionalLink from '../ConditionalLink';
import { FinishedCard } from '../Home/HomeAuctionListCard';

const StyledWrapContainer = styled.div`
  display: inline-flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const CardContainer = styled(Card)`
  position: relative;
  width: 30%;
  margin-bottom: 4.5rem;
  border-radius: 3rem !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__primary} !important;
  box-shadow: 0 0 4px 7px ${(props) =>
    props.theme.color_border__topleft} !important;
  :hover{
    transition: 0.5s;
    transform: translateY(-0.5rem);
  };

  :nth-child(2),
  :nth-child(5) {
    margin: 0 3rem 4.5rem 3rem;
  }
  }
`;

const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 1rem 1rem 1rem 1.5rem;
  align-items: center;
`;

const CardProfile = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  border-radius: 50%;
  background: #c9c9c9;
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

const StyledCancelOutlinedIcon = styled(CancelOutlinedIcon)`
  position: absolute !important;
  right: 1rem;
  margin-top: 0.5rem !important;
  border-radius: 50rem !important;
  font-size: 2rem !important;
`;

const InterestedAuctionListCard = ({ isFinished, data }) => {
  console.log(isFinished, 'issssss');
  return (
    <StyledWrapContainer>
      {/*Card_01*/}
      <CardContainer sx={{ maxWidth: '100%' }}>
        <ConditionalLink to={`/auction/${data.id}`} condition={!isFinished}>
          <StyledCancelOutlinedIcon />
          <MyCardMedia
            component="img"
            height="150"
            image={data?.product?.thumbnail?.file}
          />
          <CardTop>
            <CardProfile />
            <MyCardHeader>{data?.title}</MyCardHeader>
          </CardTop>
          <CardBottom style={{ width: '100%' }}>
            <PersonCntBox>
              <PersonIcon />
              {data?.product_groups_count}명
            </PersonCntBox>
            <EnterBox>D-7</EnterBox>
          </CardBottom>
        </ConditionalLink>
        <FinishedCard isFinished={isFinished}>
          <p>종료된 경매입니다.</p>
        </FinishedCard>
      </CardContainer>
    </StyledWrapContainer>
  );
};

export default InterestedAuctionListCard;
