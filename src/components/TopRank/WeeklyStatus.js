import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';

const Container = styled.div`
  width: 90%;
  height: 50%;
  margin: 1rem 0;
  background: ${(props) => props.theme.color_background__primary};
  border-radius: 1rem;
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

const Usercontainer = styled.div`
  position: relative;
  display: block;
  align-items: center;
  width: 30%;
  height: 50%;
  margin: 1rem;
  background: ${(props) => props.theme.color_background__third};
  border-radius: 1rem;
`;

const UserTopcontainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
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

const UserBottomcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentRank = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  right: 55%;
  bottom: 20%;
  border-radius: 50%;
  background: ${(props) => props.theme.color_font__tertiary};
`;

const UserRank = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  bottom: 10%;
  z-index: 1;
  border-radius: 50%;
  background: ${(props) => props.theme.color_background__success};
  box-shadow: 0.4rem 0.4rem 0.6rem #252040;
`;

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
              <p>A</p>
            </RecentRank>
            <UserRank>
              <p>S</p>
            </UserRank>
          </UserBottomcontainer>
        </Usercontainer>
      </WeeklyStatusUserContainer>
    </Container>
  );
};

export default WeeklyStatus;
