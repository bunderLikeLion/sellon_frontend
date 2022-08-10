import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import { TopRanker, Ranking, WeeklyStatus } from 'components/TopRank/index';

const Container = styled.div`
  width: 100%;
  height: 40rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  margin-top: 1rem;
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
  width: 100%;
  height: 85%;
`;

const LeftContainer = styled.div`
  width: 70%;
  height: 100%;
`;

const RightContainer = styled.div`
  width: 30%;
  height: 32rem;
  margin-top: 3rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
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
