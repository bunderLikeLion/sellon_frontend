import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import TopRanker from 'components/TopRank/TopRanker';
import WeeklyStatus from 'components/TopRank/WeeklyStatus';
import Ranking from 'components/TopRank/Ranking';

const Container = styled.div`
  width: 100%;
  height: 40rem;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 15%;
  background: ${(props) => props.theme.color_background__secondary};
  border-radius: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavTitle = styled.p`
  font-size: 2rem;
  background-image: ${(props) => props.theme.color_background__success};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const RankContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 70%;
  height: 100%;
`;

const RightContainer = styled.div`
  width: 30%;
  height: 32rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
  margin-top: 3rem;
`;

const TopRank = () => {
  return (
    <WrapContainer>
      <Container>
        <NavContainer>
          <NavTitle>오늘의 거래는 총 23건입니다!</NavTitle>
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
    </WrapContainer>
  );
};

export default TopRank;
