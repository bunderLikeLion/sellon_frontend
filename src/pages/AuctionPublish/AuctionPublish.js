import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import { useState } from 'react';
import AuctionPublishModal from 'components/Auction/AuctionPublish/AuctionPublishModal';

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  color: #fff;
`;

const BigContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BigText = styled.div`
  margin: 0.5rem 2rem;
  font-size: 2rem;
  font-weight: 700;
`;

const AuctionPublish = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  return (
    <WrapContainer>
      <TopContainer>
        <BigText>경매 열기</BigText>
        <BigContainer>
          <AuctionPublishModal
            handleModal={handleModal}
            isModalOpened={isModalOpened}
          />
        </BigContainer>
      </TopContainer>
    </WrapContainer>
  );
};

export default AuctionPublish;
