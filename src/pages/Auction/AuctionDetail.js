import WrapContainer from 'layouts/WrapContainer';
import styled from 'styled-components';
import AuctionItem from './AuctionItem';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  background: black;
`;

const SuggestionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

const OtherSuggestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: red;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  overflow: scroll;
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

const ItemImg = styled.div`
  width: 15%;
  height: 100%;
  background: black;
  margin-left: 2rem;
`;

const MySuggestion = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: orange;
  width: 100%;
  height: 8rem;
  margin-top: 1rem;
`;

const MyItem = styled.div`
  width: 17%;
  height: 80%;
  background: black;
  margin-left: 2rem;
`;

const DeleteIcon = styled(HighlightOffIcon)`
  position: relative;
  left: 4.1rem;
  top: 0.4rem;
`;

const Inventory = styled.div`
  display: flex;
  position: relative;
  top: 9rem;
  align-items: center;
  justify-content: space-around;
  height: 30%;
  width: 100%;
  background: black;
`;

const InventoryItem = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  height: 8rem;
  background: orange;
`;

const BeforeIcon = styled(NavigateBeforeIcon)`
  font-size: 5rem !important;
`;
const AfterIcon = styled(NavigateNextIcon)`
  font-size: 5rem !important;
`;

const AllInButton = styled.button`
  position: absolute;
  right: 1%;
  width: 6%;
  top: 5%;
  height: 13%;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const SuggestionButton = styled.button`
  width: 45%;
  height: 20%;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.3rem;
  position: relative;
  top: 105%;
`;

const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 100%;
  position: relative;
  top: 100%;
`;

const ConfirmButton = styled.button`
  width: 40%;
  height: 70%;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.3rem;
`;

const DeleteButton = styled.button`
  width: 40%;
  height: 70%;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.3rem;
`;

const AuctionDetail = () => {
  return (
    <WrapContainer>
      <ItemContainer>
        <AuctionItem />
        <SuggestionContainer>
          <OtherSuggestionContainer>
            <OtherSuggestion>
              <Profile />
              <ItemImg />
            </OtherSuggestion>
            <OtherSuggestion>
              <Profile />
              <ItemImg />
              <ItemImg />
            </OtherSuggestion>
            <OtherSuggestion>
              <Profile />
              <ItemImg />
              <ItemImg />
              <ItemImg />
              <ItemImg />
            </OtherSuggestion>
            <OtherSuggestion>
              <Profile />
              <ItemImg />
            </OtherSuggestion>
            <OtherSuggestion>
              <Profile />
              <ItemImg />
            </OtherSuggestion>
            <OtherSuggestion>
              <Profile />
              <ItemImg />
            </OtherSuggestion>
          </OtherSuggestionContainer>
          <MySuggestion>
            <MyItem>
              <DeleteIcon />
            </MyItem>
            <MyItem>
              <DeleteIcon />
            </MyItem>
            <MyItem>
              <DeleteIcon />
            </MyItem>
            <MyItem>
              <DeleteIcon />
            </MyItem>
          </MySuggestion>
        </SuggestionContainer>
      </ItemContainer>
      <Inventory>
        <BeforeIcon />
        <InventoryItem>
          <SuggestionButton>제시</SuggestionButton>
        </InventoryItem>
        <InventoryItem>
          <SuggestionButton>제시</SuggestionButton>
        </InventoryItem>
        <InventoryItem>
          <ConfirmButtonContainer>
            <ConfirmButton>확인</ConfirmButton>
            <DeleteButton>취소</DeleteButton>
          </ConfirmButtonContainer>
        </InventoryItem>
        <InventoryItem>
          <ConfirmButtonContainer>
            <ConfirmButton>확인</ConfirmButton>
            <DeleteButton>취소</DeleteButton>
          </ConfirmButtonContainer>
        </InventoryItem>
        <AfterIcon />
        <AllInButton>올인</AllInButton>
      </Inventory>
    </WrapContainer>
  );
};

export default AuctionDetail;
