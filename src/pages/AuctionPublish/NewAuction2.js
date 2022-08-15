import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  color: #fff;
`;

const BigText = styled.div`
  margin: 0.5rem 2rem;
  font-size: 2rem;
  font-weight: 700;
`;

const NewAuction2 = () => {
  return (
    <WrapContainer>
      <TopContainer>
        <BigText>경매 열기</BigText>
      </TopContainer>
    </WrapContainer>
  );
};

export default NewAuction2;
