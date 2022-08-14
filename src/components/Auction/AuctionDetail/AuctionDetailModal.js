import ItemImage from 'components/MyPage/ItemDetail/ItemImage';
import UserInformation from 'components/MyPage/ItemDetail/UserInformation';
import ItemInfoContainer from 'components/MyPage/ItemDetail/ItemInfoContainer';
import styled from 'styled-components';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSingleProductQuery from 'queries/product/useSingleProductQuery';
import { queryClient } from 'index';
import { CloseBtn } from 'components/MyPage/AddItemModal';
import { useSingleAuctionQuery } from '../../../queries/auction';

const ModalContainer = styled(Box)`
  position: relative;
  width: 80%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__default};
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 80vh;
  margin: 2rem;
  padding-top: 0.5rem;
  color: ${(props) => props.theme.color_white};
`;

const UserUploadContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 5rem 0 5rem;
`;

const ItemDetailContainer = styled.div`
  width: 40%;
  height: 70%;
`;

const StyledCloseBtn = styled(CloseBtn)`
  top: 1rem;
  right: 1rem;
  color: ${(props) => props.theme.color_button__delete};
`;

const AuctionDetailModal = ({
  handleModal,
  isModalOpened,
  isTriggeredFromBigImg,
  smallImgRelatedItemId,
}) => {
  const { id } = useParams();
  const { data } = useSingleAuctionQuery(id);

  const { data: singleItemData, isSuccess: singleItemDataFetched } =
    useSingleProductQuery(
      isTriggeredFromBigImg ? data?.product?.id : smallImgRelatedItemId?.id
    );

  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <StyledCloseBtn onClick={handleModal} />
        <Container>
          <UserUploadContainer>
            {singleItemDataFetched && (
              <ItemImage
                singleItemData={singleItemData}
                isTriggeredFromModal={true}
              />
            )}
          </UserUploadContainer>
          <ItemDetailContainer>
            {singleItemDataFetched && (
              <ItemInfoContainer
                singleItemData={singleItemData}
                isTriggeredFromModal={true}
              />
            )}
          </ItemDetailContainer>
        </Container>
      </ModalContainer>
    </Modal>
  );
};

export default AuctionDetailModal;
