import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import AuctionItem from './AuctionItem';
import AuctionOtherSuggestion from './AuctionOtherSuggestion';
import AuctionMySuggestion from './AuctionMySuggestion';

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
