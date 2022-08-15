import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import InventoryItem from './InventoryItem';
import useMyProductsQuery from 'queries/product/useMyProductsQuery';
import { Pagination } from '@mui/material';

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 35rem;
  padding: 1rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color_background__default};
`;

const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 12%;
  margin-left: 1rem;
`;

const Text = styled.h1`
  letter-spacing: 0.1rem;
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const ValidationCancelButton = styled(ClearIcon)`
  position: absolute;
  top: 2%;
  right: 2%;
  cursor: pointer;
  font-size: 2.5rem !important;
  color: #fff;
`;

const InventoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 85%;
  overflow-y: scroll;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
`;

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    button {
      color: ${(props) => props.theme.color_font__secondary} !important;
    }
    .Mui-selected {
      color: ${(props) => props.theme.color_font__number} !important;
    }
  }
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
              myProducts.results
                .filter(
                  (singleItem) =>
                    singleItem.status !== 'dealing' ||
                    singleItem.status !== 'dealed'
                )
                .map((singleItem) => {
                  return (
                    <InventoryItem
                      key={singleItem.id}
                      singleItem={singleItem}
                      setSelectedItem={props.setSelectedItem}
                      handleModal={props.handleModal}
                      status={singleItem.status == 'in_auction' ? true : false}
                    />
                  );
                })}
            <PaginationContainer>
              <StyledPagination />
            </PaginationContainer>
          </InventoryContainer>
        </ContentContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AuctionPublishModal;
