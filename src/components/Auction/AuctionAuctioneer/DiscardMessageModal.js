import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import useAllInAuctionItemMutation from '../../../queries/auction/useAllInAuctionItemMutation';
import useDeleteAuctionMutation from '../../../queries/auction/useDeleteAuctionMutation';

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 40rem;
  height: 13rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color_background__primary};

  @media screen and (max-width: 1300px) {
    max-width: 40rem;
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    max-width: 30rem;
    width: 70%;
  }
`;

const InsideBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;

const Text = styled.div`
height: fit-content;
margin: 1rem 0;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const SmallText = styled.div`
height: fit-content;
  font-size: 1rem;
  line-height: 1.4rem;
  white-space: pre-wrap;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

const ValidationButton = styled.button`
  width: 25%;
  height: 2.3rem;
  margin: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__warning};
`;

const ValidationCancelButton = styled.button`
width: 25%;
height: 2.3rem;
margin: 1rem;
border: none;
border-radius: 0.5rem;
font-size: 1rem;
font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_font__disabled};
`;

const DiscardMessageModal = ({ handleModal, isModalOpened }) => {
  const { id: auctionRelatedId } = useParams();
  const { mutate: deleteAuctionFunc } =
    useDeleteAuctionMutation(auctionRelatedId);

  const clickDiscardBtnFunc = () => {
    deleteAuctionFunc();
    handleModal();
  };

  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <InsideBox>
        <Text>정말 폐기하시겠습니까?</Text>
        <SmallText>해당 경매에 대한 참가자 정보가 모두 삭제됩니다.</SmallText>
        <ButtonContainer>
        <ValidationButton onClick={() => clickDiscardBtnFunc()}>
          폐기
        </ValidationButton>
        <ValidationCancelButton onClick={handleModal}>
          취소
            </ValidationCancelButton>
            </ButtonContainer>
        </InsideBox>
        
      </ModalContainer>
    </Modal>
  );
};

export default DiscardMessageModal;
