import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import ConditionalLink from 'components/ConditionalLink';

const Container = styled.div`
  position: relative;
  width: 28%;
  margin: 1rem;
`;

const StyledCard = styled(Card)`
  color: ${(props) => props.theme.color_white}
  background: ${(props) => props.theme.color_background__primary} !important;
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
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  border-radius: 50%;
  background: #f00;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 0 1rem 1rem 1rem;
`;

const PersonCntBox = styled.span`
  display: inline-flex;
  width: 10rem;
  height: 2.4rem;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  font-weight: 700;
  border: 1px solid grey;
  border-radius: 1rem;
  background: #101010;
  color: ${(props) => props.theme.color_white};
`;

const EnterBox = styled(PersonCntBox)`
  width: 7rem;
  border: none;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__success} !important;
  text-align: center;
`;

const InterestedAuctionListCardImage = styled(CardMedia)`
  height: 20vh;
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
  background-color: rgba(57, 57, 65, 0.83) !important;
`;

const InterestedAuctionListCard = ({ isFinished, data }) => {
  return (
    <Container>
      <ConditionalLink to={`/auction/${data.id}`} condition={!isFinished}>
        <StyledCard sx={{ maxWidth: '100%' }}>
          <InterestedAuctionListCardImage
            component="img"
            image={data?.product?.thumbnail?.file}
          />
          <CardTop>
            <CardTopImg>img</CardTopImg>
            <CardHeader title={data?.title} />
          </CardTop>
          <CardBottom style={{ width: '100%' }}>
            <PersonCntBox>
              <PersonIcon />
              {data?.product_groups_count}명
            </PersonCntBox>
            <EnterBox>들어가기</EnterBox>
          </CardBottom>
        </StyledCard>
      </ConditionalLink>
      <FinishedOverlay isFinished={isFinished}>
        <p>종료된 경매입니다.</p>
      </FinishedOverlay>
    </Container>
  );
};

export default InterestedAuctionListCard;
