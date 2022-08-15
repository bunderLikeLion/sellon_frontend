import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import { TopRanker, Ranking, WeeklyStatus } from 'components/TopRank/index';
import { useTodayCompletedQuery } from 'queries/dealing';

// TODO: tooltip에 삼각형 색깔 다름.

const AlignContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 83vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 1.2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const NavTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  background-image: ${(props) => props.theme.color_background__success};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RankContainer = styled.div`
  display: flex;
  padding-top: 1.7rem;
  gap: 1rem 3rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem 4rem;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    justify-content: space-around;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  height: 32rem;
  margin-top: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const TopRank = () => {
  const { data: todayCompletedCnt, isSuccess: todayCompletedCntFetched } =
    useTodayCompletedQuery();

  return (
    <WrapContainer>
      <AlignContainer>
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
      </AlignContainer>
    </WrapContainer>
  );
};

export default TopRank;
