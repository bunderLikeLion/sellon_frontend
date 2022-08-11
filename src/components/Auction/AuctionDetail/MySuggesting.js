import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';
import ValidationModal from './ValidationModal';
import { useMyProductsQuery } from 'queries/product';
import CardMedia from '@mui/material/CardMedia';
import { queryClient } from 'index';
import InventoryCard from './InventoryCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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

const InventoryItem = styled(CardMedia)`
  display: flex;
  justify-content: center;
  width: 9rem;
  height: 7rem;
  border-radius: 1rem;
  background: #f1f500;
`;

const BeforeIcon = styled(NavigateBeforeIcon)`
  font-size: 5rem !important;
  cursor: pointer;
`;

const DisabledBeforeIcon = styled(BeforeIcon)`
  font-size: 5rem !important;
  cursor: not-allowed;
  color: ${(props) => props.theme.color_background__third};
`;

const AfterIcon = styled(NavigateNextIcon)`
  font-size: 5rem !important;
  cursor: pointer;
`;

const DisabledAfterIcon = styled(AfterIcon)`
  font-size: 5rem !important;
  cursor: not-allowed;
  color: ${(props) => props.theme.color_background__third};
`;

const SuggestionButton = styled.button`
  position: relative;
  top: 104%;
  display: ${(props) => (props.isButtonOpened ? 'none' : 'relative')};
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
  width: 100%;
  height: 30%;
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

const MySuggesting = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [inventoryPageNum, setInventoryPageNum] = useState(1);

  const handleModal = () => setIsModalOpened(!isModalOpened);

  const { id: relatedAuctionId } = queryClient.getQueryData(['auctionInfo']);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(inventoryPageNum, 4);

  return (
    <Container>
      <GuideContainer>
        <GuideComment>인벤토리</GuideComment>
      </GuideContainer>

      {inventoryPageNum !== 1 ? (
        <BeforeIcon onClick={() => setInventoryPageNum(inventoryPageNum - 1)} />
      ) : (
        <DisabledBeforeIcon />
      )}

      {myProductFetched &&
        myProductsData.results.map((singleProduct) => {
          if (singleProduct?.status === 'hidden') {
            return (
              <InventoryCard
                key={singleProduct.id}
                singleProduct={singleProduct}
                relatedAuctionId={relatedAuctionId}
                isUsable={true}
              />
            );
          } else {
            return (
              <InventoryCard
                key={singleProduct.id}
                singleProduct={singleProduct}
                relatedAuctionId={relatedAuctionId}
                isUsable={false}
              />
            );
          }
        })}

      {inventoryPageNum !== myProductsData?.total_pages ? (
        <AfterIcon onClick={() => setInventoryPageNum(inventoryPageNum + 1)} />
      ) : (
        <DisabledAfterIcon />
      )}

      <AllInButton onClick={handleModal}>올인</AllInButton>
      <ValidationModal
        handleModal={handleModal}
        isModalOpened={isModalOpened}
      />
    </Container>
  );
};

export default MySuggesting;
