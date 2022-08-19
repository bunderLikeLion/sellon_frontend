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

const Text = styled.h1`
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
  background: ${(props) => props.theme.color_background__success};
  :hover {
    transition: 0.5s;
    border: 1px solid ${(props) => props.theme.color_border__bottomright} !important;
  }
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
        <InsideBox>
          <Text>정말 선택하시겠습니까?</Text>
          <SmallText>선택한 참여자와 진행중인 거래 단계로 넘어갑니다.</SmallText>
          <ButtonContainer>
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
            <ValidationCancelButton onClick={handleModal}>
              취소
            </ValidationCancelButton>
          </ButtonContainer>
        </InsideBox>
      
      </ModalContainer>
    </Modal>
  );
};

export default SelectMessageModal;
