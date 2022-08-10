import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 20%;
  padding: 1rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background-color: #000;
`;

const Text = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  color: #f30000;
`;

const ValidationButton = styled.button`
  position: absolute;
  right: 15%;
  bottom: 1rem;
  width: 8%;
  height: 15%;
  font-size: 1rem;
  font-weight: 600;
`;

const ValidationCancelButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 3%;
  width: 8%;
  height: 15%;
  font-size: 1rem;
  font-weight: 600;
`;

const ValidationModal = ({ handleModal, isModalOpened }) => {
  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <Text>정말 올인하시겠습니까?</Text>
        <ValidationButton>확인</ValidationButton>
        <ValidationCancelButton onClick={handleModal}>
          취소
        </ValidationCancelButton>
      </ModalContainer>
    </Modal>
  );
};

export default ValidationModal;
