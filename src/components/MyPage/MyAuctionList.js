import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import ConditionalLink from 'components/ConditionalLink';
import { FinishedOverlay } from 'styles/StyledComponetStyles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;

const CardTopImg = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f00;
`;

const CardBottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
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
  display: inline-block;
  width: 10rem;
  margin-left: 3rem;
  text-align: center;
`;

const InterestedAuctionListCardImage = styled(CardMedia)`
  height: 20vh;
`;

const StyledDeleteIcon = styled(DeleteForeverIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  color: #f00;
`;

const InterestedAuctionListCard = ({ isFinished, data }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default InterestedAuctionListCard;
