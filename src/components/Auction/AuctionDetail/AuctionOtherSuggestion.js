import styled from 'styled-components';

const OtherSuggestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: ${(props) => (props.isInventoryOpened ? '105%' : '64%')};
  border-radius: 0.5rem;
  overflow-y: scroll;
  background: ${(props) => props.theme.color_background__primary};
  }
`;

const GuideContainer = styled.div`
  display: flex;
  align-items: end;
  width: 93%;
  height: 10%;
  margin: 0 auto 0.7rem auto;
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
  margin: 0.3rem 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 15%;
  height: 15%;
`;

const Profile = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 50%;
  background: #f00;
`;

const AuctionOtherSuggestionItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
`;

const ItemImg = styled.div`
  width: 16%;
  height: 3.8rem;
  margin: 0 0 0.5rem 2rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
`;

const AuctionOtherSuggestion = (props) => {
  return (
    <OtherSuggestionContainer isInventoryOpened={props.isInventoryOpened}>
      <GuideContainer>
        <GuideComment>다른 참가자가 제시한 물건</GuideComment>
      </GuideContainer>

      <OtherSuggestion>
        <ProfileContainer>
          <Profile />
          프로필
        </ProfileContainer>
        <AuctionOtherSuggestionItemContainer>
          <ItemImg>아이템이미지</ItemImg>
          <ItemImg>아이템이미지</ItemImg>
          <ItemImg />
          <ItemImg />
          <ItemImg />
        </AuctionOtherSuggestionItemContainer>
      </OtherSuggestion>

      <OtherSuggestion>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <AuctionOtherSuggestionItemContainer>
          <ItemImg />
        </AuctionOtherSuggestionItemContainer>
      </OtherSuggestion>

      <OtherSuggestion>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <AuctionOtherSuggestionItemContainer>
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
        </AuctionOtherSuggestionItemContainer>
      </OtherSuggestion>

      <OtherSuggestion>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <AuctionOtherSuggestionItemContainer>
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
        </AuctionOtherSuggestionItemContainer>
      </OtherSuggestion>
    </OtherSuggestionContainer>
  );
};

export default AuctionOtherSuggestion;
