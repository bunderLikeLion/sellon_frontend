import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@material-ui/core/Box';

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
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__default};
`;

const UserInfoDetailModal = ({ handleModal, isModalOpened }) => {
  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        <ModalContainer></ModalContainer>
    </Modal>
  );
};

export default UserInfoDetailModal;
