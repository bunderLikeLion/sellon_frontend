import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const Container = styled.div`
  width: 90%;
  height: 50%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const WeeklyStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 0.7rem;
  margin-bottom: 1.8rem;
`;

const WeeklyStatusTitle = styled.p`
  margin: 1rem 0 0 1rem;
  font-size: 1.2rem;
`;

const QuestionIcon = styled(HelpIcon)`
  margin: 1rem 1rem 0 0;
  font-size: 0.5rem;
`;

const WeeklyStatusBottomContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 38rem;
  margin-left: 1rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
`;

const PaginationLeftIcon = styled(KeyboardArrowLeftIcon)`
  width: 2rem;
`;

const PaginationRightIcon = styled(KeyboardArrowRightIcon)`
  width: 2rem;
`;

const WeeklyStatusUserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 33rem;
  height: 75%;
`;

const UserContainer = styled.div`
  display: block;
  align-item: center;
  min-width: 10rem;
  height: 8rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__third};
`;

const UserTopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const UserImg = styled(CardMedia)`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.5rem;
  border-radius: 50%;
`;

const UserNickname = styled.p`
  color: ${(props) => props.theme.color_font__secondary};
`;

const UserBottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UserRecentWrapper = styled.div`
  display: absolute;
  margin-left: 1.5rem;
`;

const UserRankWrapper = styled.div`
  display: absolute;
`;

const RecentRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 45%;
  border-radius: 50%;
  box-shadow: 3px 3px 10px #171717;
  background: ${(props) => props.theme.color_font__disabled};
`;

const UserRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 3px 3px 10px #171717;
  background: ${(props) => props.theme.color_background__success};
`;

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 168,
    cursor: 'pointer',
    color: '#DFDCEF',
    backgroundColor: '#4E4166',
  },
});

const HoverMsg = `
hover Message 임시 작성 메시지 hover Message 임시 작성 메시지
`;


const WeeklyStatus = () => {
  return (
    <Container>
      <WeeklyStatusContainer>
        <WeeklyStatusTitle>이번 주의 신분상승</WeeklyStatusTitle>
        <StyledTooltip title={HoverMsg} arrow>
          <QuestionIcon />
        </StyledTooltip>
      </WeeklyStatusContainer>
      <WeeklyStatusBottomContainer>
        <PaginationContainer>
          <PaginationLeftIcon />
        </PaginationContainer>
        <WeeklyStatusUserContainer>
        {/*UserContainer_01*/}
        <UserContainer>
          <UserTopContainer>
            <UserImg image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSxjpGHd2RItHLUQz5UDcSRXrN0Jsl-MH4w&usqp=CAU" />
            <UserNickname>양유진</UserNickname>
          </UserTopContainer>
          <UserBottomContainer>
            <UserRecentWrapper>
              <RecentRank>
                <p>A</p>
              </RecentRank>
            </UserRecentWrapper>
            <UserRankWrapper>
              <UserRank>
                <p>S</p>
              </UserRank>
            </UserRankWrapper>
          </UserBottomContainer>
        </UserContainer>
        {/*UserContainer_02*/}
        <UserContainer>
          <UserTopContainer>
            <UserImg image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSxjpGHd2RItHLUQz5UDcSRXrN0Jsl-MH4w&usqp=CAU" />
            <UserNickname>양유진</UserNickname>
          </UserTopContainer>
          <UserBottomContainer>
            <UserRecentWrapper>
              <RecentRank>
                <p>A</p>
              </RecentRank>
            </UserRecentWrapper>
            <UserRankWrapper>
              <UserRank>
                <p>S</p>
              </UserRank>
            </UserRankWrapper>
          </UserBottomContainer>
        </UserContainer>
        {/*UserContainer_03*/}
        <UserContainer>
          <UserTopContainer>
            <UserImg image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSxjpGHd2RItHLUQz5UDcSRXrN0Jsl-MH4w&usqp=CAU" />
            <UserNickname>양유진</UserNickname>
          </UserTopContainer>
        </UserContainer>
      </WeeklyStatusUserContainer>
      <PaginationContainer>
        <PaginationRightIcon />
      </PaginationContainer>
      </WeeklyStatusBottomContainer>
    </Container>
  );
};

export default WeeklyStatus;