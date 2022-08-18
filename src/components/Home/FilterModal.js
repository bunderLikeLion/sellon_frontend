import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Radio } from '@mui/material';
import useInput from 'hooks/useInput';
import { useCategoryQuery } from 'queries/product';
import toast from 'react-hot-toast';

const ModalContainer = styled(Box)`
  position: relative;
  width: fit-content;
  min-width: 50rem;
  max-width: 60%;
  top: 50%;
  left: 50%;
  padding: 3rem;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  overflow-y: auto;

  color: ${(props) => props.theme.color_white};
  background: ${(props) => props.theme.color_background__default};

  @media screen and (max-width: 1300px) {
    min-width: 800px;
    max-width: 70%;
    padding: 2rem 2rem;
  }

  @media screen and (max-width: 1000px) {
    min-width: 1px;
    max-width: 90%;
    max-height: 60%;
    padding: 1rem 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
`;

const CloseBtn = styled(CloseIcon)`
  position: absolute;
  top: 1.7rem;
  right: 2rem;
  width: 2rem !important;
  height: 2rem !important;
  cursor: pointer;
  color: ${(props) => props.theme.color_font__number};
`;

const GuideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledLabel = styled.p`
  width: 8rem;
  margin: 1rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__tertiary};
`;

const SearchLabelContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  gap: 1rem;
  width: 50%;
  height: 3.5rem;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.color_background__primary};
`;

const TextContainer = styled.p`
  flex-basis: content;
  padding-left: .8rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__tertiary};
`;

const InputArea = styled.input`
  flex: auto;
  height: 2rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  border: none;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__primary};
`;

const CategoryRadioBox = styled.div`
  width: 100%;
  min-height: 4rem;
  padding: 0.7rem;
  border: 0.1px solid transparent;
  border-radius: 10px;
  background: ${(props) => props.theme.color_background__primary};
`;

const CategoryContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
`;

const SingleRadio = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-basis: calc((100% - 3rem) / 4);

  @media screen and (max-width: 1000px) {
    flex-basis: calc((100% - 2rem) / 3);
  }

  @media screen and (max-width: 700px) {
    flex-basis: calc((100% - 1rem) / 2);
  }
`;

const RadioLabel = styled.label`
  color: ${(props) => props.theme.color_font__secondary};
`;

const StyledRadio = styled(Radio)`
  color: ${(props) => props.theme.color_white} !important;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ApplyButton = styled(Button)`
  width: 6rem;
  height: 2rem;
  border: none !important;
  border-radius: 10px !important;
  font-size: 1.2rem !important;
  color: ${(props) => props.theme.color_white} !important;
  background: ${(props) => props.theme.color_button__ok};
`;

const ResetButton = styled(Button)`
  width: 8rem;
  height: 2rem;
  border: none !important;
  border-radius: 10px !important;
  font-size: 1.2rem !important;
  color: ${(props) => props.theme.color_white} !important;
  background: ${(props) => props.theme.color_button__ok};
`;

const FilterModal = (props) => {
  const [
    areaRestriction,
    handleAreaRestriction,
    resetAreARestriction,
    setAreaRestriction,
  ] = useInput(props.areaRestriction);
  const [
    filterKeyword,
    handleFilterKeyword,
    resetHandleFilterKeyword,
    setFilterKeyword,
  ] = useInput(props.filterKeyword);
  const [cat, handleCat, resetCat, setCat] = useInput(props.cat);

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
    setAreaRestriction('1');
    props.handleFilterModal();
  };

  const submitFilter = () => {
    props.setAreaRestriction(areaRestriction);
    props.setFilterKeyword(filterKeyword);
    props.setCat(cat);
    props.handleFilterModal();
  };

  const resetFieldFunc = () => {
    toast.success('필터 초기화 완료.');
    props.setFilterKeyword('');
    setFilterKeyword('');
    props.setCat('전체');
    setCat('전체');
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
        <ContentContainer>
          <GuideContainer>
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              fontSize={30}
              fontWeight={600}
            >
              필터 및 검색
            </Typography>
            <ResetButton onClick={resetFieldFunc}>필터 초기화</ResetButton>
          </GuideContainer>
          <SearchLabelContainer>
            <TextContainer>상품명</TextContainer>
            <InputArea value={filterKeyword} onChange={handleFilterKeyword} />
          </SearchLabelContainer>

          <CategoryRadioBox>
            <StyledLabel>상품 카테고리</StyledLabel>
            <CategoryContentBox>
              <SingleRadio>
                <StyledRadio {...catControlProps('전체')} />
                <RadioLabel>전체</RadioLabel>
              </SingleRadio>
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

          <ButtonContainer>
            <ApplyButton
              variant="outlined"
              onClick={submitFilter}
              sx={{ borderRadius: 2.4 }}
            >
              적용
            </ApplyButton>
          </ButtonContainer>
        </ContentContainer>
      </ModalContainer>
    </Modal>
  );
};

export default FilterModal;
