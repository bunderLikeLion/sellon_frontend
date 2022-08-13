import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 1rem;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-bottom: 0.5rem;
`;

const RankingTitle = styled.div`
  font-size: 1.4rem;
`;

const QuestionIcon = styled(HelpIcon)`
  font-size: 1.4rem;
`;

const BottomContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 85%;
  border-radius: 0.5rem;
`;

const RankerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const RankerContainerLeft = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color_font__tertiary};
`;

const RankerNumber = styled.p`
  margin: 0.7rem;
`;

const RankerImg = styled(CardMedia)`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
`;

const RankerNickname = styled.div`
  margin: 0.7rem;
`;

const RankerDealCount = styled.div`
  margin: 0.7rem;
`;

const Ranking = () => {
  return (
    <Container>
      <TopContainer>
        <RankingTitle>실시간 거래 랭킹</RankingTitle>
        <QuestionIcon />
      </TopContainer>
      <BottomContainer>
        <RankerContainer>
          <RankerContainerLeft>
            <RankerNumber>1</RankerNumber>
            <RankerImg image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzItJxK6yd6pXAXm2U5oxQpTlWXdIX4ZI4jyl0mgRlyFp3UNW6RAzARQ0RrRuD0iykLEA&usqp=CAU" />
            <RankerNickname>허유라</RankerNickname>
          </RankerContainerLeft>
          <div>
            <RankerDealCount>총 50 회</RankerDealCount>
          </div>
        </RankerContainer>
        <RankerContainer>
          <RankerContainerLeft>
            <RankerNumber>1</RankerNumber>
            <RankerImg image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzItJxK6yd6pXAXm2U5oxQpTlWXdIX4ZI4jyl0mgRlyFp3UNW6RAzARQ0RrRuD0iykLEA&usqp=CAU" />
            <RankerNickname>허유라</RankerNickname>
          </RankerContainerLeft>
          <div>
            <RankerDealCount>총 50 회</RankerDealCount>
          </div>
        </RankerContainer>
      </BottomContainer>
    </Container>
  );
};

export default Ranking;
