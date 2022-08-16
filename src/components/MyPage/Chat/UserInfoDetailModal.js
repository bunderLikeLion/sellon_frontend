import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@material-ui/core/Box';
import CardMedia from '@mui/material/CardMedia';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import dateFormatter from 'utils/dateFormatter';

const ModalContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 55rem;
  height: 45rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
  border-radius: 10px;
  background: ${(props) => props.theme.color_background__default};
`;

const DealSummarize = styled.p`
  padding-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_white};
`;

const SummarizeContainer = styled.div`
  width: 100%;
  height: 80%;
  margin-bottom: 2rem;
  border-radius: 10px;
  overflow: hidden;
  background: ${(props) => props.theme.color_background__secondary};
`;

const SummarizeTopContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25%;
  padding: 1rem;
  border-bottom: 0.2rem solid #674a72;
  background: ${(props) => props.theme.color_background__secondary};
`;

const MyItemImg = styled(CardMedia)`
  width: 3.75rem;
  height: 3.75rem;
  margin: 0 1.5rem;
  border-radius: 10px;
  background: red;
`;

const DealedMyItemImg = styled(CardMedia)`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 10px;
`;

const OpponentItemImg = styled(CardMedia)`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 10px;
  margin: 0 1rem 0.1rem 1rem;
`;

const ItemTitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemUploadDate = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color_font__tertiary};
`;

const SummarizeBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  padding: 0 2.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const ArrowIcon = styled(SyncAltIcon)`
  margin: 0 2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const OpponentItemImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  height: 80%;
  padding-left: 1rem;
`;

const ConfirmButton = styled.button`
  position: absolute;
  width: 5rem;
  height: 1.7rem;
  right: 8%;
  bottom: 3%;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color_buttontext__ok};
  background: ${(props) => props.theme.color_button__ok};
`;

const UserInfoDetailModal = ({ handleModal, isModalOpened, singleDeal }) => {
  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <DealSummarize>이번 경매, 요약하기</DealSummarize>
        <SummarizeContainer>
          <SummarizeTopContainer>
            <MyItemImg image={singleDeal?.owner?.avatar} />
            <div>
              <ItemTitle>{singleDeal?.auction?.title}</ItemTitle>
              <ItemUploadDate>
                {dateFormatter(singleDeal?.auction?.created_at)}
              </ItemUploadDate>
            </div>
          </SummarizeTopContainer>
          <SummarizeBottomContainer>
            <DealedMyItemImg image={singleDeal?.product?.thumbnail?.file} />
            <ArrowIcon fontSize="large" />
            <OpponentItemImgContainer>
              {singleDeal?.product_group?.products.map((singleProduct) => {
                return (
                  <OpponentItemImg image={singleProduct?.thumbnail?.file} />
                );
              })}
            </OpponentItemImgContainer>
          </SummarizeBottomContainer>
        </SummarizeContainer>
        <ConfirmButton onClick={handleModal}>확인</ConfirmButton>
      </ModalContainer>
    </Modal>
  );
};

export default UserInfoDetailModal;
