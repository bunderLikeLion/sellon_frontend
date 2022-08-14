import styled from 'styled-components';
import AuctionItem from 'components/Auction/AuctionDetail/AuctionItem';
import AuctionOtherSuggestion from 'components/Auction/AuctionDetail/AuctionOtherSuggestion';
import AuctionMySuggestion from 'components/Auction/AuctionDetail/AuctionMySuggestion';
import { useState } from 'react';
import WrapContainer from 'layouts/WrapContainer';
import { useSingleAuctionQuery } from 'queries/auction';
import { useParams } from 'react-router-dom';

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
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 100%;
  margin-top: 1rem;
`;

const AuctionDetail = () => {
  const { id: auctionId } = useParams();

  const [isInventoryOpened, setIsInventoryOpened] = useState(false);
  const handleInventory = () => setIsInventoryOpened(!isInventoryOpened);

  const { data: singleAuctionData, isSuccess: singleAuctionDataFetched } =
    useSingleAuctionQuery(auctionId);

  return (
    <WrapContainer>
      {singleAuctionDataFetched && (
        <Container>
          <ItemContainer>
            <TopContainer>
              <AuctionItem
                isInventoryOpened={isInventoryOpened}
                singleAuctionData={singleAuctionData}
              />
              <SuggestionContainer>
                <AuctionOtherSuggestion isInventoryOpened={isInventoryOpened} />
              </SuggestionContainer>
            </TopContainer>
          </ItemContainer>
          <AuctionMySuggestion
            isInventoryOpened={isInventoryOpened}
            handleInventory={handleInventory}
          />
        </Container>
      )}
    </WrapContainer>
  );
};

export default AuctionDetail;
