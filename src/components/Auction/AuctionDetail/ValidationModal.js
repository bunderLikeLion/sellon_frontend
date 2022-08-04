import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ModalContainer = styled(Box)`
  position: absolute;
  width: 50%;
  height: 20%;
  border-radius: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  color: red;
  font-weight: 700;
  font-size: 1.8rem;
`;

const ValidationButton = styled.button`
  position: absolute;
  width: 8%;
  height: 15%;
  font-size: 1rem;
  font-weight: 600;
  bottom: 1rem;
  right: 15%;
`;

const ValidationCancelButton = styled.button`
  position: absolute;
  width: 8%;
  height: 15%;
  font-size: 1rem;
  font-weight: 600;
  bottom: 1rem;
  right: 3%;
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
