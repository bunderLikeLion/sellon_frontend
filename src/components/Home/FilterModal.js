import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Radio, TextField } from '@mui/material';
import useCategoryQuery from 'queries/product/useCategoryQuery';
import useInput from 'hooks/useInput';

const ModalContainer = styled(Box)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70%;
  background: ${(props) => props.theme.color_background__default};
  color: ${(props) => props.theme.color_white};
  padding: 3rem;
  overflow-y: scroll;
  border-radius: 1rem;
`;

const CloseBtn = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${(props) => props.theme.color_font__number};
  cursor: pointer;
`;

const StyledLabel = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
`;

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    border: 2px solid transparent;
    border-image: ${(props) => props.theme.color_border__hover} 1;
  }
  & .MuiInput-underline:after {
    border: 2px solid transparent;
    border-image: ${(props) => props.theme.color_border__hover} 1;
  }
  & .MuiOutlinedInput-root {
    color: ${(props) => props.theme.color_white} !important;
    & fieldset {
      border: 2px solid transparent;
      border-image: ${(props) => props.theme.color_border__hover} 1;
    }
    &:hover fieldset {
      border: 2px solid transparent;
      border-image: ${(props) => props.theme.color_border__hover} 1;
    }
    &.Mui-focused fieldset {
      border: 2px solid transparent;
      border-image: ${(props) => props.theme.color_border__hover} 1;
    }
  }
`;

const CategoryRadioBox = styled.div`
  width: 40rem;
  min-height: 3rem;
  padding: 1rem;
  margin-top: 2rem;
  background: ${(props) => props.theme.color_background__default};
  border-radius: 0.3rem;
  border: 2px solid transparent;
  border-image: ${(props) => props.theme.color_border__hover} 1;
`;

const CategoryContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SingleRadio = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  margin-bottom: 0.3rem;
`;

const RadioLabel = styled.label`
  color: ${(props) => props.theme.color_font__secondary};
`;

const StyledRadio = styled(Radio)`
  color: ${(props) => props.theme.color_white} !important;
`;

const StatusRadio = styled(SingleRadio)`
  width: 20%;
`;

const FilterModal = (props) => {
  const [filterKeyword, handleFilterKeyword, resetHandleFilterKeyword] =
    useInput(props.filterKeyword);
  const [
    areaRestriction,
    handleAreaRestriction,
    resetAreARestriction,
    setAreaRestriction,
  ] = useInput(props.areaRestriction);
  const [cat, handleCat, resetCat] = useInput(props.cat);

  const { data: catData, isSuccess: catFetched } = useCategoryQuery([
    'formCategories',
  ]);

  const areRestrictionControlProps = (item) => ({
    checked: areaRestriction === item,
    onChange: handleAreaRestriction,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const catControlProps = (item) => ({
    checked: cat === item,
    onChange: handleCat,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const closeModalFunc = () => {
    resetCat();
    resetHandleFilterKeyword();
    setAreaRestriction('1');
    props.handleFilterModal();
  };

  const submitFilter = () => {
    props.setAreaRestriction(areaRestriction);
    props.setFilterKeyword(filterKeyword);
    props.setCat(cat);
    props.handleFilterModal();
  };

  return (
    <Modal
      open={props.isFilterModalOpened}
      onClose={closeModalFunc}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <CloseBtn onClick={closeModalFunc} />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          아이템 추가
        </Typography>

        <StyledLabel>상품명</StyledLabel>
        <StyledTextField
          id="outlined-name"
          value={filterKeyword}
          onChange={handleFilterKeyword}
        />

        <CategoryRadioBox>
          <StyledLabel>경매 지역</StyledLabel>
          <CategoryContentBox>
            <StatusRadio>
              <StyledRadio {...areRestrictionControlProps('0')} />
              <RadioLabel>전국구</RadioLabel>
            </StatusRadio>
            <StatusRadio>
              <StyledRadio {...areRestrictionControlProps('1')} />
              <RadioLabel>홈그라운드</RadioLabel>
            </StatusRadio>
          </CategoryContentBox>
        </CategoryRadioBox>

        <CategoryRadioBox>
          <StyledLabel>상품 카테고리</StyledLabel>
          <CategoryContentBox>
            {catFetched &&
              catData.map((singleCat) => {
                return (
                  <SingleRadio>
                    <StyledRadio {...catControlProps(`${singleCat.id}`)} />
                    <RadioLabel>{singleCat.name}</RadioLabel>
                  </SingleRadio>
                );
              })}
          </CategoryContentBox>
        </CategoryRadioBox>

        <Button variant="outlined" onClick={submitFilter}>
          적용
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default FilterModal;
