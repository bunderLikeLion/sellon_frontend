import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useAllInAuctionItemMutation from '../../queries/auction/useAllInAuctionItemMutation';
import { useParams } from 'react-router-dom';

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  height: 13rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color_background__primary};
`;

const Text = styled.h1`
  margin-top: 10%;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const ValidationButton = styled.button`
  position: absolute;
  left: 32%;
  bottom: 10%;
  width: 15%;
  height: 15%;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__warning};
`;

const ValidationCancelButton = styled.button`
  position: absolute;
  right: 32%;
  bottom: 10%;
  width: 15%;
  height: 15%;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_font__disabled};
`;

const ValidationModal = ({
  handleModal,
  isModalOpened,
  mainText,
  btnText,
  type,
}) => {
  /*
  handleModal: 모달 open/close handler
  isModalOpened: 모달 open/close state(상태)
  mainText: 메인 글
  btnText: 기능을 수행할 버튼의 이름
  type: 어떤 버튼인지
        - allIn: 올인
        - endDealing: 경매 종료
  */

  const { id: auctionRelatedId } = useParams();
  const { mutate: allInFunc } = useAllInAuctionItemMutation(auctionRelatedId);

  const clickBtnFunc = () => {
    if (type === 'allIn') {
      allInFunc();
    }
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
        <Text>{mainText}</Text>
        <ValidationButton onClick={clickBtnFunc}>{btnText}</ValidationButton>
        <ValidationCancelButton onClick={handleModal}>
          취소
        </ValidationCancelButton>
      </ModalContainer>
    </Modal>
  );
};

export default ValidationModal;
