import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import {
  TotalExchange,
  MostExchanger,
  Champion,
  TierRise,
  ExchangeRanking,
} from 'components/TopRank/index';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: black;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 55%;
  height: 70%;
  background: white;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 70%;
  background: beige;
`;

const TopRank = () => {
  return (
    <WrapContainer>
      <Container>
        <TotalExchange />
        <LeftContainer>
          <MostExchanger />
          <Champion />
          <TierRise />
        </LeftContainer>
        <RightContainer>
          <ExchangeRanking />
        </RightContainer>
      </Container>
    </WrapContainer>
  );
};

export default TopRank;
