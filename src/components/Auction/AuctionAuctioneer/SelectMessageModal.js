import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import { useCreateDealingMutation } from 'queries/dealing';

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
  background: ${(props) => props.theme.color_background__success};
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

const SelectMessageModal = ({
  handleModal,
  isModalOpened,
  selectedGroupId,
}) => {
  const { id: auctionRelatedId } = useParams();
  const { mutate: createDealing } = useCreateDealingMutation();

  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <Text>정말 선택하시겠습니까?</Text>
        <Link to={`/mypage`}>
          <ValidationButton
            onClick={() => {
              createDealing({
                auction_id: auctionRelatedId,
                product_group_id: selectedGroupId,
              });
            }}
          >
            선택
          </ValidationButton>
        </Link>
        <ValidationCancelButton onClick={handleModal}>
          취소
        </ValidationCancelButton>
      </ModalContainer>
    </Modal>
  );
};

export default SelectMessageModal;
