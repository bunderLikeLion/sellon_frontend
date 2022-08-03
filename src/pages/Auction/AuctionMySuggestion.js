import styled from 'styled-components';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const MySuggestion = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: saddlebrown;
  width: 50%;
  height: 60%;
  top: -8.5rem;
  right: 0;
`;

const MyItem = styled.div`
  width: 17%;
  height: 6.5rem;
  background: black;
  margin-left: 2.3rem;
`;

const DeleteIcon = styled(HighlightOffIcon)`
  position: relative;
  left: 4.1rem;
  top: 0.4rem;
`;

const Inventory = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  height: 14rem;
  width: 100%;
  background: black;
`;

const InventoryItem = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  height: 9rem;
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
  width: 4.5%;
  top: 5%;
  height: 12%;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
`;

const SuggestionButton = styled.button`
  width: 35%;
  height: 16%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.3rem;
  position: relative;
  top: 104%;
`;

const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 100%;
  position: relative;
  top: 97%;
`;

const ConfirmButton = styled.button`
  width: 35%;
  height: 55%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.3rem;
`;

const DeleteButton = styled.button`
  width: 35%;
  height: 55%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.3rem;
`;

const InventoryContainer = styled.div`
  position: relative;
`;

const AuctionMySuggestion = () => {
  return (
    <InventoryContainer>
      <Inventory>
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
    </InventoryContainer>
  );
};

export default AuctionMySuggestion;
