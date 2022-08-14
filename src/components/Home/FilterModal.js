import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Radio, TextField } from '@mui/material';
import useInput from 'hooks/useInput';
import { useCategoryQuery } from 'queries/product';

const ModalContainer = styled(Box)`
  position: relative;
  top: 50%;
  left: 50%;
  width: 50rem;
  height: 42rem;
  padding: 3rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.color_white};
  background: ${(props) => props.theme.color_background__default};
`;

const CloseBtn = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.color_font__number};
`;

const GuideContainer = styled.div`
  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const StyledLabel = styled.p`
  width: 8rem;
  margin: 1rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__tertiary};
`;

const StyledTextField = styled(TextField)`
  //자동완성 글씨, 배경 자동 변경 방지 설정
  input:-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.theme.color_font__secondary} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  & label.Mui-focused {
    border: 2px solid transparent;
    background: ${(props) => props.theme.color_background__primary};
  }
  & .MuiInput-underline:after {
    border: 2px solid transparent;
    background: ${(props) => props.theme.color_background__primary};
  }
  & .MuiOutlinedInput-root {
    color: ${(props) => props.theme.color_white} !important;
    & fieldset {
      border: 2px solid transparent;
      border-radius: 10px;
      background: ${(props) => props.theme.color_background__primary};
    }
    &:hover fieldset {
      border: 2px solid transparent;
      background: ${(props) => props.theme.color_background__primary};
    }
    &.Mui-focused fieldset {
      border: 2px solid transparent;
      background: ${(props) => props.theme.color_background__primary};
    }
  }
  width: 25rem;
`;

const CategoryRadioBox = styled.div`
  width: 40rem;
  height: 22rem;
  min-height: 2rem;
  padding: 0.1rem;
  margin-top: 2rem;
  border-radius: 10px;
  border: 0.1px solid transparent;
  background: ${(props) => props.theme.color_background__primary};
`;

const CategoryContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0.4rem;
`;

const SingleRadio = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  margin-bottom: 0.3rem;
`;

const RadioLabel = styled.label`
  width: 10rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const StyledRadio = styled(Radio)`
  color: ${(props) => props.theme.color_white} !important;
`;

const ApplyButton = styled(Button)`
  position: absolute !important;
  bottom: 7%;
  right: 4%;
  width: 7rem;
  height: 2.5rem;
  margin-top: 1.5rem !important;
  border: none !important;
  border-radius: 10px;
  font-size: 1.2rem !important;
  color: ${(props) => props.theme.color_white} !important;
  background: ${(props) => props.theme.color_button__ok};
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
        <GuideContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            필터 및 검색
          </Typography>
        </GuideContainer>
        <SearchContainer>
          {/*<StyledLabel>상품명</StyledLabel>*/}
          <StyledTextField
            id="outlined-name"
            value={filterKeyword}
            onChange={handleFilterKeyword}
            placeholder="상품명"
          >
            <SearchIcon/>
          </StyledTextField>
        </SearchContainer>

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

        <ApplyButton variant="outlined" onClick={submitFilter}>
          적용
        </ApplyButton>
      </ModalContainer>
    </Modal>
  );
};

export default FilterModal;
