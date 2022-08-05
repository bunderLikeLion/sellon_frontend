import styled from 'styled-components';
import AuctionOtherSuggestionItem from './AuctionOtherSuggestionItem';

const OtherSuggestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  background: ${(props) => props.theme.color_background__primary};
  border-radius: 0.5rem;
  overflow-y: scroll;
`;

const GuideContainer = styled.div`
  display: flex;
  align-items: end;
  width: 95%;
  height: 10%;
  margin-left: auto;
  margin-right: auto;
`;

const GuideComment = styled.h1`
  font-size: 1.1rem;
  font-weight: 400;
`;

const OtherSuggestion = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  margin: 0.3rem 1rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 13%;
  height: 100%;
`;

const Profile = styled.div`
  width: 100%;
  height: 4.2rem;
  border-radius: 50%;
  background: red;
`;

const AuctionOtherSuggestionItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 87%;
`;

const AuctionOtherSuggestion = () => {
  return (
    <OtherSuggestionContainer>
      <GuideContainer>
        <GuideComment>다른 참가자가 제시한 물건</GuideComment>
      </GuideContainer>

      <OtherSuggestion>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <AuctionOtherSuggestionItemContainer>
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
        </AuctionOtherSuggestionItemContainer>
      </OtherSuggestion>

      <OtherSuggestion>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <AuctionOtherSuggestionItemContainer>
          <AuctionOtherSuggestionItem />
        </AuctionOtherSuggestionItemContainer>
      </OtherSuggestion>

      <OtherSuggestion>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <AuctionOtherSuggestionItemContainer>
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
          <AuctionOtherSuggestionItem />
        </AuctionOtherSuggestionItemContainer>
      </OtherSuggestion>
    </OtherSuggestionContainer>
  );
};

export default AuctionOtherSuggestion;
