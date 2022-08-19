import styled from 'styled-components';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { FinishedOverlay } from 'styles/StyledComponetStyles';
import { useCreateAuctionItemMutation } from 'queries/auction';


const InventoryItemWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: center;
  flex: 1 1 calc((100% - 3rem) / 4);
  max-width: calc((100% - 3rem) / 4);

  @media screen and (max-width: 600px) {
    flex: 1 1 calc((100% - 1rem) / 2);
    max-width: calc((100% - 1rem) / 2);
  }
`;

const InventoryItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  text-align: center;
  background: ${(props) => props.theme.color_background__third};
`;

const InventoryItem = styled(CardMedia)`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 1rem;
`;

const InventoryItemImageContainer = styled.div`
  height: 10rem;
  width: 100%;
`;

const InventoryItemImage = styled.img`
  padding: 1rem;
  width: 100%;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.8rem;

`

const SuggestionButton = styled.button`
  display: ${(props) => (props.isButtonOpened ? 'none' : 'relative')};
  width: fit-content;
  padding: 0.5rem 0.8rem;
  align-items: center;
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
  display: ${(props) => (props.isButtonOpened ? 'flex' : 'none')};
  justify-content: space-around;
  align-items: center;
  height: 1.3rem;
  width: 100%;
`;

const ConfirmButton = styled.button`
  width: fit-content;
  padding: 0.5rem 0.8rem;
  color: ${(props) => props.theme.color_font__secondary};
  font-size: 0.9rem;
  font-weight: 600;
  border: 0.1px transparent;
  border-radius: 0.7rem;
  background: ${(props) => props.theme.color_button__ok};
  background-size: 300% 100%;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  :hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #6253e1);
    box-shadow: inset 0 4px 15px 0 rgba(126, 52, 161, 0.75);
  }
`;

const DeleteButton = styled.button`
  width: fit-content;
  padding: 0.5rem 0.8rem;
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
  p {
    line-height: 1.8rem;
  }

  @media screen and (max-width: 1000px) {
    font-size: 0.9rem;

    p {
      line-height: 1rem;
    }
  }
`;

const InventoryCard = ({ singleProduct, relatedAuctionId, isUsable }) => {
  const [isButtonOpened, setIsButtonOpened] = useState(false);

  const handleButton = () => setIsButtonOpened(!isButtonOpened);

  const { mutate: createAuctionItem } =
    useCreateAuctionItemMutation(relatedAuctionId);

  return (
    <InventoryItemWrapper>
      <InventoryItemContainer key={singleProduct?.id}>
        <InventoryItem>
          <InventoryItemImageContainer>
            <InventoryItemImage src={singleProduct?.thumbnail?.file} alt="" />
          </InventoryItemImageContainer>
          <ButtonWrapper>
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
          </ButtonWrapper>
        </InventoryItem>
        <FinishedCard isFinished={!isUsable}>
          <p>
            사용중인 <br /> 아이템입니다.
          </p>
        </FinishedCard>
      </InventoryItemContainer>
    </InventoryItemWrapper>
  );
};

export default InventoryCard;
