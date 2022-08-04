import styled from 'styled-components';
import TierRiseProfile from './TierRiseProfile';

const Container = styled.div`
  width: 85%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: red;
  position: relative;
  overflow-y: scroll;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3%;
`;

const TierRise = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>이번 주의 신분 상승!</Title>
      </TitleContainer>
      <TierRiseProfile />
      <TierRiseProfile />
      <TierRiseProfile />
      <TierRiseProfile />
      <TierRiseProfile />
    </Container>
  );
};

export default TierRise;
