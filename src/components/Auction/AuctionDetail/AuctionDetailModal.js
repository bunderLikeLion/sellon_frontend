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
  width: 60%;
  max-width: 1400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__default};
  overflow-y: auto;

  &:focus-visible {
    outline: none;
  }

  @media screen and (max-width: 1300px) {
    width: 70%;
    padding: 2rem 2rem;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    max-height: 60%;
    padding: 1rem 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin: 2rem;
  color: ${(props) => props.theme.color_white};

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const UserUploadContainer = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const ItemDetailContainer = styled.div`
  flex: 1;
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
  singleItemInfo,
}) => {
  const { id } = useParams();
  const { data } = useSingleAuctionQuery(id);

  const { data: singleItemData, isSuccess: singleItemDataFetched } =
    useSingleProductQuery(
      singleItemInfo
        ? null
        : isTriggeredFromBigImg
        ? data?.product?.id
        : smallImgRelatedItemId?.id
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
            {singleItemDataFetched && (
              <>
                <ItemTitle>{singleItemData.name}</ItemTitle>
                <ItemImage
                  singleItemData={singleItemData}
                  isTriggeredFromModal={true}
                />
              </>
            )}
            {singleItemInfo && (
              <>
                <ItemTitle>{singleItemInfo.name}</ItemTitle>
                <ItemImage
                  singleItemData={singleItemInfo}
                  isTriggeredFromModal={true}
                />
              </>
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
            {singleItemInfo && (
              <ItemInfoContainer
                singleItemData={singleItemInfo}
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
