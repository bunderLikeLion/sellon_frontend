import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Container = styled.div`
  position: relative;
  width: 30%;
  margin: 2% 1.5%;
`;

const CardContainer = styled(Card)`
  border-radius: 3rem !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__primary} !important;
  box-shadow: 0px 0px 4px 7px ${(props) => props.theme.color_border__topleft} !important;
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
  background: grey;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 5rem;
  height: 2.4rem;
  margin: 0.3rem;
  background: transparent;
  border-radius: 4rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__number} !important;
`;

const EnterBox = styled(PersonCntBox)`
  width: 7rem;
  border: none;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__success} !important;
  text-align: center;
`;

const MyCardMedia = styled(CardMedia)`
  object-fit: cover;
  height: 14rem;
`;

const MyCardHeader = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  font-size: 1.4rem;
`;

const StyledDeleteIcon = styled(DeleteForeverIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: red;
  cursor: pointer;
`;

const FinishedOverlay = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 3rem !important;
  box-shadow: 0px 0px 4px 14px
    ${(props) => props.theme.color_background__default} !important;
  background-color: rgba(57, 57, 65, 0.83) !important;
  color: ${(props) => props.theme.color_font__primary} !important;
  text-align: center;
  font-size: 2rem;
`;

const InterestedAuctionListCard = () => {
  return (
    <Container>
      <CardContainer sx={{ maxWidth: '100%' }}>
        <StyledDeleteIcon />
        <MyCardMedia
          component="img"
          height="150"
          image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
        />
        <CardTop>
          <CardTopImg>profile</CardTopImg>
          <MyCardHeader>사탕 살래?사탕 살래?사탕 살래?사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            10명
          </PersonCntBox>
          <EnterBox>D-1</EnterBox>
        </CardBottom>
      </CardContainer>
      <FinishedOverlay>
        <p>
          종료된 거래
          <br />
          입니다.
        </p>
      </FinishedOverlay>
    </Container>
  );
};

export default InterestedAuctionListCard;
