import styled from 'styled-components';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { FinishedOverlay } from 'styles/StyledComponetStyles';
import { useCreateAuctionItemMutation } from 'queries/auction';


const InventoryItemWrapper = styled.div`
  display: inline-flex;
  flex-direction: flex-start;
  justify-content: center;
  width: 13.2rem;
  height: 6.5rem;
`;
//background: skyblue;

const InventoryItemContainer = styled.div`
  position: relative;
  width: 10.5rem;
  height: 8rem;
  border-radius: 1rem;
  text-align: center;
  background: ${(props) => props.theme.color_background__third};
`;

const InventoryItem = styled(CardMedia)`
  display: flex;
  justify-content: center;
  width: 10.5rem;
  height: 6rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: #f1f500;
`;

const SuggestionButton = styled.button`
  display: ${(props) => (props.isButtonOpened ? 'none' : 'relative')};
  position: relative;
  top: 104%;
  width: 45%;
  height: 1.3rem;
  align-items: center;
  margin-top: 0.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__secondary}; 
  text-align: center;
  border: 0.1px transparent;
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
  height: 1.3rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.color_font__secondary}; 
  font-size: 0.9rem;
  font-weight: 600;
  border: 0.1px transparent;
  border-radius: 0.7rem;
  background: ${(props) => props.theme.color_button__ok};
`;

const DeleteButton = styled.button`
  width: 40%;
  height: 1.3rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.color_font__secondary}; 
  font-size: 0.9rem;
  font-weight: 600;
  border: 0.1px transparent;
  border-radius: 0.7rem;
  background: ${(props) => props.theme.color_font__disabled};
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
    <InventoryItemWrapper>
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
    </InventoryItemWrapper>
  );
};

export default InventoryCard;
