import styled from 'styled-components';
import AuctionOtherSuggestionItem from './AuctionOtherSuggestionItem';

const OtherSuggestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  margin-left: 1rem;
  overflow-y: scroll;
`;

const OtherSuggestion = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 6rem;
  border-radius: 0.2rem;
  background: saddlebrown;
  padding: 1rem;
  margin: 1rem;
`;

const Profile = styled.div`
  width: 14%;
  height: 100%;
  border-radius: 50%;
  background: red;
`;

const AuctionOtherSuggestion = () => {
  return (
    <OtherSuggestionContainer>
      <OtherSuggestion>
        <Profile>프로필</Profile>
        <AuctionOtherSuggestionItem />
      </OtherSuggestion>
      <OtherSuggestion>
        <Profile />
        <AuctionOtherSuggestionItem />
        <AuctionOtherSuggestionItem />
        <AuctionOtherSuggestionItem />
        <AuctionOtherSuggestionItem />
      </OtherSuggestion>
      <OtherSuggestion>
        <Profile />
      </OtherSuggestion>
      <OtherSuggestion>
        <Profile />
      </OtherSuggestion>
      <OtherSuggestion>
        <Profile />
      </OtherSuggestion>
      <OtherSuggestion>
        <Profile />
      </OtherSuggestion>
    </OtherSuggestionContainer>
  );
};

export default AuctionOtherSuggestion;
