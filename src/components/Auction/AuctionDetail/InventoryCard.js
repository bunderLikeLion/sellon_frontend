import styled from 'styled-components';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { FinishedOverlay } from 'styles/StyledComponetStyles';
import { useCreateAuctionItemMutation } from 'queries/auction';

const InventoryItemContainer = styled.div`
  position: relative;
  width: 9rem;
  height: 9rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__third};
`;

const InventoryItem = styled(CardMedia)`
  display: flex;
  justify-content: center;
  width: 9rem;
  height: 7rem;
  border-radius: 1rem;
  background: #f1f500;
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
  margin-top: 4%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.7rem;
  background: ${(props) => props.theme.color_button__ok};
`;

const DeleteButton = styled.button`
  width: 40%;
  height: 70%;
  margin-top: 4%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.7rem;
  background: ${(props) => props.theme.color_button__delete};
`;

const FinishedCard = styled(FinishedOverlay)`
  font-size: 1.5rem;
  border-radius: 1rem !important;
`;

const InventoryCard = ({ singleProduct, relatedAuctionId, isUsable }) => {
  const [isButtonOpened, setIsButtonOpened] = useState(false);

  const handleButton = () => setIsButtonOpened(!isButtonOpened);

  const { mutate: createAuctionItem } =
    useCreateAuctionItemMutation(relatedAuctionId);

  return (
    <InventoryItemContainer key={singleProduct?.id}>
      <InventoryItem image={singleProduct?.thumbnail?.file}>
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
          <ConfirmButton
            onClick={() =>
              createAuctionItem({
                product_id: singleProduct?.id,
              })
            }
          >
            확인
          </ConfirmButton>
          <DeleteButton onClick={handleButton}>취소</DeleteButton>
        </ConfirmButtonContainer>
      </InventoryItem>
      <FinishedCard isFinished={!isUsable}>
        <p>
          사용할 수 없는 <br /> 아이템입니다.
        </p>
      </FinishedCard>
    </InventoryItemContainer>
  );
};

export default InventoryCard;
