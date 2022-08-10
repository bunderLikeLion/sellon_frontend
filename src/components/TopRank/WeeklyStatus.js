import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';

const Container = styled.div`
  width: 90%;
  height: 49%;
  margin: 1rem 0;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const WeeklyStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 0.5rem;
`;

const WeeklyStatusTitle = styled.p`
  margin: 1rem 0 0 1rem;
  font-size: 1.2rem;
`;

const QuestionIcon = styled(HelpIcon)`
  margin: 1rem 1rem 0 0;
  font-size: 0.5rem;
`;

const WeeklyStatusUserContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

const UserContainer = styled.div`
  display: block;
  align-item: center;
  width: 30%;
  height: 75%;
  margin: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__third};
`;

const UserTopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const UserImg = styled(CardMedia)`
  width: 2.2rem;
  height: 2.2rem;
  margin: 0.5rem;
  border-radius: 50%;
`;

const UserNickname = styled.p`
  color: ${(props) => props.theme.color_font__secondary};
`;

const UserBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentRank = styled.div`
  right: 55%;
  bottom: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme.color_font__disabled};
`;

const UserRank = styled.div`
  height: 3rem;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  z-index: 1;
  border-radius: 50%;
  background: ${(props) => props.theme.color_background__success};
`;

const WeeklyStatus = () => {
  return (
    <Container>
      <WeeklyStatusContainer>
        <WeeklyStatusTitle>이번 주의 신분상승</WeeklyStatusTitle>
        <QuestionIcon />
      </WeeklyStatusContainer>
      <WeeklyStatusUserContainer>
        <UserContainer>
          <UserTopContainer>
            <UserImg image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSxjpGHd2RItHLUQz5UDcSRXrN0Jsl-MH4w&usqp=CAU" />
            <UserNickname>양유진</UserNickname>
          </UserTopContainer>
          <UserBottomContainer>
            <RecentRank>
              <p>A</p>
            </RecentRank>
            <UserRank>
              <p>S</p>
            </UserRank>
          </UserBottomContainer>
        </UserContainer>
      </WeeklyStatusUserContainer>
    </Container>
  );
};

export default WeeklyStatus;
