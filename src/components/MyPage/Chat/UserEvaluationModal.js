import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@material-ui/core/Box';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEvaluateDealingMutation } from 'queries/dealing';
import dateFormatter from 'utils/dateFormatter';

const ModalContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: 35rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__default};
`;

const DealEvaluate = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  padding-top: 1rem;
  color: ${(props) => props.theme.color_white};
`;

const EvaluateContainer = styled.div`
  width: 100%;
  height: 70%;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`;

const EvaluateTopContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: calc((100% - 3.5rem) / 5);
  max-width: calc((100% - 3.5rem) / 5);
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
  @media screen and (max-width: 920px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 520px) {
    padding: 0;
  }
`;

const UserEvaluate = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_white};
`;

const StarRatingContainer = styled.div`
  width: 45%;
  max-width: 25rem;
  height: 30%;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__third};
  @media screen and (max-width: 920px) {
    width: 100%;
    min-width: 13rem;
  }
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
  width: 8rem;
  height: 2.2rem;
  right: 4rem;
  bottom: 6%;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  background: ${(props) => props.theme.color_button__ok};
  color: ${(props) => props.theme.color_font__primary};
`;

const CancelButton = styled.button`
  position: absolute;
  width: 5rem;
  height: 2.2rem;
  right: 13.5rem;
  bottom: 6%;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_font__disabled};
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

const UserEvaluationModal = ({
  handleEvaluationModal,
  isEvaluationModalOpened,
  selectedDeal,
  opponent,
}) => {
  const [rateValue, setRateValue] = useState(3);

  const { mutate: evaluateFunc } = useEvaluateDealingMutation();

  const endBtnClickFunc = async () => {
    await evaluateFunc({ dealing_id: selectedDeal?.id, rate: rateValue });
    handleEvaluationModal();
  };
  return (
    <Modal open={isEvaluationModalOpened} onClose={handleEvaluationModal}>
      <ModalContainer>
        <DealEvaluate>이번 거래, 평가하기</DealEvaluate>
        <EvaluateContainer>
          <EvaluateTopContainer>
            <MyItemImg image={selectedDeal?.product?.thumbnail?.file} />
            <div>
              <ItemTitle>{selectedDeal?.auction?.title}</ItemTitle>
              <ItemUploadDate>
                {dateFormatter(selectedDeal?.created_at)}
              </ItemUploadDate>
            </div>
          </EvaluateTopContainer>
          <EvaluateBottomContainer>
            <UserEvaluate>
              {opponent?.username}님과의 거래를 평가하기.
            </UserEvaluate>
            <StarRatingContainer>
              <StarRating component="fieldset" mb={0} borderColor="transparent">
                <StyledRating
                  name="simple-controlled"
                  size="large"
                  precision={1}
                  value={rateValue}
                  onChange={(event, newValue) => {
                    setRateValue(newValue);
                  }}
                />
              </StarRating>
            </StarRatingContainer>
          </EvaluateBottomContainer>
        </EvaluateContainer>
        {/*        <DealSummarize>이번 거래, 요약하기</DealSummarize>
        <DealSummarizeContainer>
          <MyItemImgSummarize
            image={selectedDeal?.auction?.product?.thumbnail?.file}
          />
          <ArrowIcon />
          {selectedDeal?.product_group?.products.map((singleItem, idx) => {
            if (idx < 5)
              return (
                <OpponentItemImg
                  key={singleItem?.id}
                  image={singleItem?.thumbnail?.file}
                />
              );
          })}
          {selectedDeal?.product_group?.products.length > 5 && <ExtraIcon />}
        </DealSummarizeContainer>*/}
        <CancelButton onClick={handleEvaluationModal}>취소</CancelButton>
        <ConfirmButton onClick={endBtnClickFunc}>평가 등록</ConfirmButton>
      </ModalContainer>
    </Modal>
  );
};

export default UserEvaluationModal;
