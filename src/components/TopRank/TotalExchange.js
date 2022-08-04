import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
`;

const TotalExchangeQuantity = styled.h1`
  font-size: 3rem;
`;

const TotalExchange = () => {
  return (
    <Container>
      <TotalExchangeQuantity>
        오늘의 거래는 총 100건 입니다!
      </TotalExchangeQuantity>
    </Container>
  );
};

export default TotalExchange;
