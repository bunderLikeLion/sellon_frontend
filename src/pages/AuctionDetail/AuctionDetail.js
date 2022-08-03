import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import AuctionItem from 'components/Auction/AuctionDetail/AuctionItem';
import AuctionOtherSuggestion from 'components/Auction/AuctionDetail/AuctionOtherSuggestion';
import AuctionMySuggestion from 'components/Auction/AuctionDetail/AuctionMySuggestion';

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
  return (
    <WrapContainer>
      <ItemContainer>
        <TopContainer>
          <AuctionItem />
          <SuggestionContainer>
            <AuctionOtherSuggestion />
          </SuggestionContainer>
        </TopContainer>
      </ItemContainer>
      <AuctionMySuggestion />
    </WrapContainer>
  );
};

export default AuctionDetail;
