import styled from 'styled-components';
import { Checkbox, Button } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #f2f2f2;
`;

const TopContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: 45%;
  background-color: white;
`;

const TopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 40%;
  margin-left: 2%;
`;

const BigText = styled.h1`
  margin-top: 3rem;
  font-size: 3rem;
`;

const CountParticipant = styled.div`
  display: inline-flex;
  align-items: center;
  width: 30%;
  height: 20%;
  margin-top: 7%;
`;

const TopImageContainer = styled.div`
  position: absolute;
  right: 0;
  width: 25%;
  height: 30%;
  margin: 3rem 10% 0 0;
  text-align: center;
  background-color: #f5f5f5;
`;

const BottomContainer = styled.div`
  height: 50%;
  background-color: #262626;
`;

const Participant = styled.div`
  display: inline-flex;
  align-items: center;
  height: 20%;
  width: 80%;
  margin-left: 2%;
  margin-top: 2%;
  background-color: #fff;
`;

const ParticipantItemImage = styled.div`
  width: 4.5%;
  height: 80%;
  margin-right: 2%;
  background-color: #a1a1a1;
`;

const StyledButton = styled(Button)`
  && {
    position: absolute;
    right: 0;
    margin-right: 2%;
    border-radius: 0;
    background-color: #c9c9c9;
  }
`;

const MoreButton = styled(Button)`
  && {
    width: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const StyledPersonOutlinedIcon = styled(PersonOutlineOutlinedIcon)`
  && {
    margin-right: 8%;
  }
`;

const StyledPersonIcon = styled(PersonIcon)`
  && {
    margin-right: 7%;
  }
`;

//checkbox
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AuctionFinished = () => {
  return (
    <Container>
      <TopContainer>
        <TopTextContainer>
          <BigText>WELL DONE!</BigText>
          <CountParticipant>
            <StyledPersonOutlinedIcon size="small" />
            <p>~ 명</p>
          </CountParticipant>
        </TopTextContainer>
        <TopImageContainer>경매품 이미지</TopImageContainer>
      </TopContainer>

      <BottomContainer>
        <StyledButton variant="contained" size="small">
          선택
        </StyledButton>
        <Participant>
          <Checkbox {...label} color="default" />
          <StyledPersonIcon alt="participant" fontSize="large" />
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
        </Participant>
        <Participant>
          <Checkbox {...label} color="default" />
          <StyledPersonIcon alt="participant" fontSize="large" />
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <MoreButton variant="text" size="small">
            ⋯
          </MoreButton>
        </Participant>
        <Participant>
          <Checkbox {...label} color="default" />
          <StyledPersonIcon alt="participant" fontSize="large" />
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
          <ParticipantItemImage></ParticipantItemImage>
        </Participant>
      </BottomContainer>
    </Container>
  );
};

export default AuctionFinished;
