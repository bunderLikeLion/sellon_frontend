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
  width: 62rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__default};

  &:focus-visible {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 34rem;
  margin: 2rem;
  color: ${(props) => props.theme.color_white};
`;

const UserUploadContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 1rem;
`;

const ItemDetailContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 1rem;
`;

const ItemTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 2.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.color_font__primary};
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
  const { name } = data;

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
          {/*좌측 영역 */}
          <UserUploadContainer>
            <ItemTitle>test{name}</ItemTitle>
            {singleItemDataFetched && (
              <ItemImage
                singleItemData={singleItemData}
                isTriggeredFromModal={true}
              />
            )}
          </UserUploadContainer>
          {/*우측 아이템 상태-카테고리-개수-메모 영역*/}
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
