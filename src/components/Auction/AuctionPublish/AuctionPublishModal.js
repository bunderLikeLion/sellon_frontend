import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import InventoryItem from './InventoryItem';
import useMyProductsQuery from 'queries/product/useMyProductsQuery';
import { Pagination } from '@mui/material';
import { useState, useEffect } from 'react';
import EmptyListPlaceHolder from 'components/Shared/EmptyListPlaceholder';

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  max-width: 1400px;
  height: 60%;
  padding: 2rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color_background__default};

  @media screen and (max-width: 1300px) {
    width: 70%;
    height: 45rem;
    padding: 2rem 2rem;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    max-height: 60%;
    padding: 1rem 1rem;
  }
`;

const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  height: 12%;
  justify-content: space-between;
`;

const Text = styled.h1`
  letter-spacing: 0.1rem;
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const ValidationCancelButton = styled(ClearIcon)`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 2.5rem !important;
  color: ${(props) => props.theme.color_font__number}; ;
`;

const InventoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

const ItemListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
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

const OverFlowHiddenContainer = styled.div`
  height: 80%;
  overflow: hidden;
`;

const AuctionPublishModal = (props) => {
  const { data: myProducts, isSuccess } = useMyProductsQuery(1, 30);
  const [useableMyProducts, setUseableMyProducts] = useState([]);

  useEffect(() => {
    setUseableMyProducts(
      myProducts.results.filter((singleItem) => singleItem.status === 'hidden')
    )
  }, [myProducts])

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
            <ValidationCancelButton onClick={props.handleModal} />
          </TextContainer>
          <OverFlowHiddenContainer>
            <InventoryContainer>
                {isSuccess &&
                  (
                    useableMyProducts.length > 0 ? (
                      <ItemListContainer>
                        {
                          useableMyProducts.map((singleItem) => {
                            return (
                              <InventoryItem
                                key={singleItem.id}
                                singleItem={singleItem}
                                setSelectedItem={props.setSelectedItem}
                                handleModal={props.handleModal}
                                status={singleItem.status === 'in_auction'}
                              />
                            );
                          }
                          )}
                      </ItemListContainer>
                    ) : (
                    <EmptyListPlaceHolder message="아직 인벤토리에 등록한 물건이 없습니다" />
                    ))}
              <PaginationContainer>
                <StyledPagination />
              </PaginationContainer>
            </InventoryContainer>
          </OverFlowHiddenContainer>
        </ContentContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AuctionPublishModal;
