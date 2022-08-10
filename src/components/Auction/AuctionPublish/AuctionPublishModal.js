import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import InventoryItem from './InventoryItem';
import useMyProductsQuery from '../../../queries/product/useMyProductsQuery';

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 75%;
  padding: 1rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background-color: #000;
`;

const ContentContainer = styled.div`
  width: 70%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 12%;
`;

const Text = styled.h1`
  letter-spacing: 0.1rem;
  color: #fff;
  font-weight: 600;
  font-size: 2rem;
`;

const ValidationCancelButton = styled(ClearIcon)`
  position: absolute;
  color: #fff;
  font-size: 2.5rem !important;
  top: 2%;
  right: 2%;
  cursor: pointer;
`;

const InventoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 100%;
  height: 85%;
`;

const AuctionPublishModal = (props) => {
  const { data: myProducts, isSuccess } = useMyProductsQuery(1, 30);

  return (
    <Modal
      open={props.isModalOpened}
      onClose={props.handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <ContentContainer>
          <TextContainer>
            <Text>인벤토리</Text>
          </TextContainer>
          <ValidationCancelButton onClick={props.handleModal} />
          <InventoryContainer>
            {isSuccess &&
              myProducts.results.map((singleItem) => {
                return (
                  <InventoryItem
                    key={singleItem.id}
                    singleItem={singleItem}
                    setSelectedItem={props.setSelectedItem}
                    handleModal={props.handleModal}
                  />
                );
              })}
          </InventoryContainer>
        </ContentContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AuctionPublishModal;
