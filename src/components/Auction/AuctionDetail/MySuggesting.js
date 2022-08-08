import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';
import ValidationModal from './ValidationModal';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const GuideContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const GuideComment = styled.h1`
  margin-left: 13%;
  font-size: 1.2rem;
  font-weight: 400;
`;

const InventoryItemContainer = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__third};
`;

const InventoryItem = styled.div`
  display: flex;
  justify-content: center;
  width: 9rem;
  height: 7rem;
  border-radius: 1rem;
  background: #f1f500;
`;

const BeforeIcon = styled(NavigateBeforeIcon)`
  font-size: 5rem !important;
`;
const AfterIcon = styled(NavigateNextIcon)`
  font-size: 5rem !important;
`;

const SuggestionButton = styled.button`
  display: ${(props) => (props.isButtonOpened ? 'none' : 'relative')};
  position: relative;
  top: 104%;
  width: 45%;
  height: 22%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.7rem;
  background: ${(props) => props.theme.color_button__ok};
`;

const ConfirmButtonContainer = styled.div`
  position: relative;
  top: 97%;
  display: ${(props) => (props.isButtonOpened ? 'flex' : 'none')};
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 100%;
`;

const ConfirmButton = styled.button`
  width: 40%;
  height: 70%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.7rem;
  margin-top: 4%;
  background: ${(props) => props.theme.color_button__ok};
`;

const DeleteButton = styled.button`
  width: 40%;
  height: 70%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.7rem;
  margin-top: 4%;
  background: ${(props) => props.theme.color_button__delete};
`;

const AllInButton = styled.button`
  position: absolute;
  top: 5%;
  right: 1%;
  width: 6%;
  height: 13%;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.color_button__ok};
`;

const MySuggesting = (props) => {
  const [isButtonOpened, setIsButtonOpened] = useState(false);
  const handleButton = () => setIsButtonOpened(!isButtonOpened);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  return (
    <Container>
      <GuideContainer>
        <GuideComment>인벤토리</GuideComment>
      </GuideContainer>
      <BeforeIcon />
      <InventoryItemContainer>
        <InventoryItem>
          <SuggestionButton
            onClick={handleButton}
            isButtonOpened={isButtonOpened}
            handleButton={handleButton}
          >
            제시
          </SuggestionButton>
          <ConfirmButtonContainer
            isButtonOpened={isButtonOpened}
            handleButton={handleButton}
          >
            <ConfirmButton>확인</ConfirmButton>
            <DeleteButton onClick={handleButton}>취소</DeleteButton>
          </ConfirmButtonContainer>
        </InventoryItem>
      </InventoryItemContainer>
      <InventoryItemContainer>
        <InventoryItem>
          <SuggestionButton>제시</SuggestionButton>
        </InventoryItem>
      </InventoryItemContainer>
      <InventoryItemContainer>
        <InventoryItem></InventoryItem>
      </InventoryItemContainer>
      <InventoryItemContainer>
        <InventoryItem>
          <ConfirmButtonContainer>
            <ConfirmButton>확인</ConfirmButton>
            <DeleteButton>취소</DeleteButton>
          </ConfirmButtonContainer>
        </InventoryItem>
      </InventoryItemContainer>
      <AfterIcon />
      <AllInButton onClick={handleModal}>올인</AllInButton>
      <ValidationModal
        handleModal={handleModal}
        isModalOpened={isModalOpened}
      />
    </Container>
  );
};

export default MySuggesting;
