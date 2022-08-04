import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  height: 90%;
  background: orange;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3%;
`;

const ExchangeRanking = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>실시간 거래 랭킹!</Title>
      </TitleContainer>
    </Container>
  );
};

export default ExchangeRanking;
