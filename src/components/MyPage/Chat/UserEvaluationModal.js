import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@material-ui/core/Box';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const AlignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ModalContainer = styled(Box)`
  position: relative;
  width: 55rem;
  height: 45rem;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__default};
`;

const DealEvaluate = styled.p`
  padding-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_white};
`;

const EvaluateContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`;

const EvaluateTopContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30%;
  padding: 1rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const MyItemImg = styled(CardMedia)`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 1.5rem;
  border-radius: 0.5rem;
  background: red;
`;

const ItemTitle = styled.p`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemUploadDate = styled.p`
  color: ${(props) => props.theme.color_font__tertiary};
`;

const EvaluateBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70%;
  padding: 0 2.5rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const UserEvaluate = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_white};
`;

const StarRatingContainer = styled.div`
  width: 45%;
  height: 30%;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__third};
`;

const StarRating = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DealSummarize = styled.p`
  padding-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
`;

const DealSummarizeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20%;
  bottom: 15%;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const MyItemImgSummarize = styled(CardMedia)`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  background: red;
`;

const ArrowIcon = styled(SyncAltIcon)`
  color: ${(props) => props.theme.color_font__primary};
`;

const OpponentItemImg = styled(CardMedia)`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  background: pink;
`;

const ExtraIcon = styled(MoreHorizIcon)`
  color: ${(props) => props.theme.color_font__primary};
`;

const ConfirmButton = styled.button`
  position: absolute;
  width: 5rem;
  height: 1.7rem;
  right: 8%;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color_buttontext__ok};
  background: ${(props) => props.theme.color_button__ok};
`;

const StyledRating = withStyles({
  iconEmpty: {
    fontSize: 40,
  },
  iconFilled: {
    color: '#9454B5',
    fontSize: 40,
  },
  iconHover: {
    color: '#7B749D',
    fontSize: 45,
  },
})(Rating);

const UserEvaluationModal = ({ handleModal, isModalOpened }) => {
  const [value, setValue] = useState(2);
  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <AlignContainer>
        <ModalContainer>
          <DealEvaluate>이번 거래, 평가하기</DealEvaluate>
          <EvaluateContainer>
            <EvaluateTopContainer>
              <MyItemImg />
              <div>
                <ItemTitle>
                  커피 온도를 그대로 담을 수 있는 하얀색 컵 입양하세요.
                </ItemTitle>
                <ItemUploadDate>2022.08.07</ItemUploadDate>
              </div>
            </EvaluateTopContainer>
            <EvaluateBottomContainer>
              <UserEvaluate>허유라님과의 거래를 평가하기.</UserEvaluate>
              <StarRatingContainer>
                <StarRating
                  component="fieldset"
                  mb={0}
                  borderColor="transparent"
                >
                  <Typography component="legend"></Typography>
                  <StyledRating
                    name="simple-controlled"
                    size="large"
                    precision={1}
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </StarRating>
              </StarRatingContainer>
            </EvaluateBottomContainer>
          </EvaluateContainer>
          <DealSummarize>이번 거래, 요약하기</DealSummarize>
          <DealSummarizeContainer>
            <MyItemImgSummarize />
            <ArrowIcon />
            <OpponentItemImg />
            <OpponentItemImg />
            <OpponentItemImg />
            <OpponentItemImg />
            <ExtraIcon />
          </DealSummarizeContainer>
          <ConfirmButton onClick={handleModal}>확인</ConfirmButton>
        </ModalContainer>
      </AlignContainer>
    </Modal>
  );
};

export default UserEvaluationModal;
