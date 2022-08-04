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
  width: 100%;
  height: 45%;
  background-color: white;
  display: inline-flex;
`;

const TopTextContainer = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
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

const CountParticipantIcon = styled.div`
  width: 15%;
  height: 100%;
  margin-right: 15%;
`;

const TopImageContainer = styled.div`
  background-color: lightgray;
  width: 25%;
  height: 30%;
  text-align: center;
  margin-top: 3rem;
  position: absolute;
  right: 0;
  margin-right: 10%;
`;

const BottomContainer = styled.div`
  background-color: #262626;
  height: 50%;
`;

const Participant = styled.div`
  background-color: white;
  height: 20%;
  width: 80%;
  margin-left: 2%;
  margin-top: 2%;
  display: inline-flex;
  align-items: center;
`;

const ParticipantItemImage = styled.div`
  background-color: #a1a1a1;
  width: 4.5%;
  height: 80%;
  margin-right: 2%;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #c9c9c9;
    position: absolute;
    right: 0;
    margin-right: 2%;
    border-radius: 0;
  }
`;

const MoreButton = styled(Button)`
  && {
    font-weight: bold;
    font-size: 1.5rem;
    width: 1rem;
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
