import styled from 'styled-components';
import AuctionItem from 'components/Auction/AuctionDetail/AuctionItem';
import AuctionOtherSuggestion from 'components/Auction/AuctionDetail/AuctionOtherSuggestion';
import Inventory from 'components/Auction/AuctionDetail/Inventory';
import { useState } from 'react';
import WrapContainer from 'layouts/WrapContainer';
import { useSingleAuctionQuery } from 'queries/auction';
import { useParams } from 'react-router-dom';
import MySuggested from 'components/Auction/AuctionDetail/MySuggested';

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AuctionInfoContainer = styled.div`
  flex: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const InventoryContainer = styled.div`
  flex: 0;
`

const AuctionItemContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 1rem;
`

const SuggestionContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 1rem;
`;

const AuctionDetail = () => {
  const { id: auctionId } = useParams();

  const { data: singleAuctionData, isSuccess: singleAuctionDataFetched } =
    useSingleAuctionQuery(auctionId);

  return (
    <WrapContainer>
      {singleAuctionDataFetched && (
        <Container>
          <AuctionInfoContainer>
            <AuctionItemContainer>
              <AuctionItem
                singleAuctionData={singleAuctionData}
              />
            </AuctionItemContainer>
            <SuggestionContainer>
              <AuctionOtherSuggestion />
              <MySuggested />
            </SuggestionContainer>

          </AuctionInfoContainer>
          <InventoryContainer>
            <Inventory />
          </InventoryContainer>
        </Container>
      )}
    </WrapContainer>
  );
};

export default AuctionDetail;
