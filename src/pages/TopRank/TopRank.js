import styled from 'styled-components';
import { TopRanker, Ranking, WeeklyStatus } from 'components/TopRank/index';
import { useTodayCompletedQuery } from 'queries/dealing';

const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1360px !important;
  min-height: 91vh;
  height: 100% !important;
  color: ${(props) => props.theme.color_white} !important;
  background: ${(props) => props.theme.color_background__default} !important;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  height: 100%;
  margin-top: 2rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const NavTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  background-image: ${(props) => props.theme.color_background__success};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RankContainer = styled.div`
  display: flex;
  padding-top: 1.2rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

const RightContainer = styled.div`
  width: 30%;
  height: 32rem;
  margin-top: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const TopRank = () => {
  const { data: todayCompletedCnt, isSuccess: todayCompletedCntFetched } =
    useTodayCompletedQuery();

  return (
    <AllContainer>
      <Container>
        <NavContainer>
          <NavTitle>
            오늘의 거래는 총{' '}
            {todayCompletedCntFetched && todayCompletedCnt.count}
            건입니다!
          </NavTitle>
        </NavContainer>
        <RankContainer>
          <LeftContainer>
            <TopRanker />
            <WeeklyStatus />
          </LeftContainer>
          <RightContainer>
            <Ranking />
          </RightContainer>
        </RankContainer>
      </Container>
    </AllContainer>
  );
};

export default TopRank;
