import styled from 'styled-components';
import AuctionItem from 'components/Auction/AuctionDetail/AuctionItem';
import AuctionOtherSuggestion from 'components/Auction/AuctionDetail/AuctionOtherSuggestion';
import AuctionMySuggestion from 'components/Auction/AuctionDetail/AuctionMySuggestion';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  overflow-y: hidden;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

const SuggestionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  height: 60vh;
`;

const AuctionDetail = () => {
  const [isInventoryOpened, setIsInventoryOpened] = useState(false);
  const handleInventory = () => setIsInventoryOpened(!isInventoryOpened);

  return (
    <Container>
      <ItemContainer>
        <TopContainer>
          <AuctionItem isInventoryOpened={isInventoryOpened} />
          <SuggestionContainer>
            <AuctionOtherSuggestion />
          </SuggestionContainer>
        </TopContainer>
      </ItemContainer>
      <AuctionMySuggestion
        isInventoryOpened={isInventoryOpened}
        handleInventory={handleInventory}
      />
    </Container>
  );
};

export default AuctionDetail;
