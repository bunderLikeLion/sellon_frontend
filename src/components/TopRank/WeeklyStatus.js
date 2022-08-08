import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';

const Container = styled.div`
  width: 90%;
  height: 50%;
  background: ${(props) => props.theme.color_background__primary};
  border-radius: 1rem;
  margin: 1rem 0;
`;

const WeeklyStatusContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const WeeklyStatusTitle = styled.p`
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const QuestionIcon = styled(HelpIcon)`
  font-size: 0.5rem;
  margin-right: 1rem;
  margin-top: 1rem;
`;

const WeeklyStatusUserContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`;

const Usercontainer = styled.div`
  width: 30%;
  height: 50%;
  background: ${(props) => props.theme.color_background__third};
  margin: 1rem;
  border-radius: 1rem;
  display: block;
  align-items: center;
  position: relative;
`;

const UserTopcontainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

const UserImg = styled(CardMedia)`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: green;
  margin: 0.5rem;
`;

const UserNickname = styled.p`
  color: ${(props) => props.theme.color_font__secondary};
`;

const UserBottomcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentRank = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: red;
  background: ${(props) => props.theme.color_font__tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 55%;
  bottom: 20%;
`;

const RecentRankTitle = styled.p``;

const UserRank = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) => props.theme.color_background__success};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  bottom: 10%;
  box-shadow: 4px 4px 8px black;
`;

const RankTitle = styled.p``;

const WeeklyStatus = () => {
  return (
    <Container>
      <WeeklyStatusContainer>
        <WeeklyStatusTitle>이번 주의 신분상승</WeeklyStatusTitle>
        <QuestionIcon />
      </WeeklyStatusContainer>
      <WeeklyStatusUserContainer>
        <Usercontainer>
          <UserTopcontainer>
            <UserImg image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSxjpGHd2RItHLUQz5UDcSRXrN0Jsl-MH4w&usqp=CAU" />
            <UserNickname>안유진</UserNickname>
          </UserTopcontainer>
          <UserBottomcontainer>
            <RecentRank>
              <RecentRankTitle>A</RecentRankTitle>
            </RecentRank>
            <UserRank>
              <RankTitle>S</RankTitle>
            </UserRank>
          </UserBottomcontainer>
        </Usercontainer>
      </WeeklyStatusUserContainer>
    </Container>
  );
};

export default WeeklyStatus;
