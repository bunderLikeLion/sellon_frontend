import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from 'react';
import { Radio, TextField } from '@mui/material';
import ThumbnailImageDragDrop from 'components/MyPage/ItemAddForm/ImageDragDrop/ThumbnailImageDragDrop';
import ExtraImageDragDrop from './ItemAddForm/ImageDragDrop/ExtraImageDragDrop';
import { useCategoryQuery } from 'queries/product';
import { useCreateProductMutation } from 'queries/product';
import useInput from 'hooks/useInput';

const ModalContainer = styled(Box)`
  position: relative;
  top: 50%;
  left: 50%;
  width: fit-content;
  min-width: 50rem;
  max-width: 60%;
  height: 80%;
  padding: 3rem;
  overflow-y: scroll;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color_background__default};
  color: ${(props) => props.theme.color_white};

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

const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.color_font__primary};
  font-size: 1.2rem !important;

  @media screen and (max-width: 1000px) {
    padding: 0.5rem;
  }
`;

export const CloseBtn = styled(CloseIcon)`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.color_font__number};
`;

const AddBtn = styled(Button)`
  display: flex;
  align-items: stretch;
  width: 7rem;
  height: 2.5rem;
  margin-top: 1.5rem !important;
  border: none !important;
  font-size: 1.2rem !important;
  background: ${(props) => props.theme.color_button__ok};
  color: ${(props) => props.theme.color_white} !important;
`;

export const StyledLabel = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__tertiary};
`;

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    border: 3px solid transparent;
  }
  & .MuiInput-underline:after {
    border: 3px solid transparent;
  }

  //자동완성 글씨, 배경 자동 변경 방지 설정
  input:-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.theme.color_font__secondary} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  & .MuiOutlinedInput-root {
    width: 15rem;
    height: 2.5rem;
    padding-left: 1rem;
    font-size: 1rem;
    color: #ffffff !important;
    & fieldset {
      border: 2px solid transparent;
    }
    &:hover fieldset {
      border: 2px solid transparent;
    }
    &.Mui-focused fieldset {
      border: 2px solid transparent;
    }
  }
`;

export const StatusRadioBox = styled.div`
  max-width: 40rem;
  width: 100%;
  min-height: 2rem;
  margin-top: 2rem;
  padding: 0;
  font-size: 1rem;
  border: 3px solid transparent;
  border-radius: 1rem;
  color: #ffffff !important;
  background: ${(props) => props.theme.color_background__primary};
`;

const CategoryRadioBox = styled.div`
  max-width: 40rem;
  width: 100%;
  min-height: 3rem;
  margin-top: 2rem;
  padding: 0;
  font-size: 1rem;
  border: 3px solid transparent;
  border-radius: 1rem;
  color: #ffffff !important;
  background: ${(props) => props.theme.color_background__primary};
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  min-height: 3rem;
  margin: 2rem 0;
  padding: 0;
  font-size: 1rem;
  border: 3px solid transparent;
  border-radius: 1rem;
  color: ${(props) => props.theme.color_font__white} !important;
  background: ${(props) => props.theme.color_background__primary};
`;

const ImageContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  min-height: 3rem;
  margin: 2rem 0;
  padding: 1rem;
  font-size: 1rem;
  border: 3px solid transparent;
  border-radius: 1rem;
  color: ${(props) => props.theme.color_font__white} !important;
  background: ${(props) => props.theme.color_background__primary};
`;

export const InsideRadioBox = styled.div`
  padding: 1.5rem;
`;

export const InsideBox = styled.div`
  display: flex;
  align-items: baseline;
  width: fit-content;
  padding: 0.2rem 1.5rem;
`;

export const StatusContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const CategoryContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
`;

const SingleRadio = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  margin-top: 1rem;
`;

const RadioLabel = styled.label`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

export const StyledRadio = styled(Radio)`
  padding-left: 0 !important;
  color: ${(props) => props.theme.color_white} !important;

  &:hover {
    background: transparent !important;
  }
`;

export const StatusRadio = styled(SingleRadio)`
  width: 5rem;
`;

const InputQuantityBox = styled.div`
  width: 7rem;
  height: 2.5rem;
  font-size: 1rem;
  border: 3px solid transparent;
  border-radius: 1rem;
  color: ${(props) => props.theme.color_white} !important;
`;

const InputQuantity = styled.input.attrs((props) => ({ type: 'number' }))`
  & {
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    font-size: 1rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.color_font__secondary};
  }
  &:focus-visible {
    outline: none;
  }
`;

const DescriptionInputContainer = styled.div``;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ItemTextarea = styled.textarea`
  max-width: 40rem;
  width: 100%;
  height: 12rem;
  resize: none;
  padding: 1rem;
  margin-top: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__primary};
`;

const AddItemModal = ({ handleModal, isModalOpened }) => {
  const editorRef = useRef();
  const [thumbnailPic, setThumbNailPic] = useState([]);
  const [extraPics, setExtraPics] = useState([]);
  const [itemName, handleItemName, itemNameReset] = useInput('');
  const [status, handleStatus, statusReset] = useInput('');
  const [category, handleCategory, categoryReset] = useInput('');
  const [quantity, handleQuantity, quantityReset] = useInput('1');
  const [itemDesc, handleItemDesc] = useInput('');

  const closeModal = () => {
    itemNameReset();
    statusReset();
    categoryReset();
    quantityReset();
    setThumbNailPic([]);
    setExtraPics([]);
    handleModal();
  };

  const { data: catData, isSuccess: catFetched } = useCategoryQuery([
    'formCategories',
  ]);

  const { mutate: postSubmit, isSuccess: createdSuccessfully } =
    useCreateProductMutation();

  const catControlProps = (item) => ({
    checked: category === item,
    onChange: handleCategory,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const statusControlProps = (item) => ({
    checked: status === item,
    onChange: handleStatus,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const submit = () => {
    const frm = new FormData();
    frm.append('thumbnail.file', thumbnailPic[0]);
    extraPics.forEach((single, idx) => {
      frm.append(`images[${idx}]file`, single);
    });
    frm.append('product_category_id', +category);
    frm.append('name', itemName);
    frm.append('quality', +status);
    frm.append('quantity', quantity);
    frm.append('description', itemDesc);
    postSubmit(frm);
  };

  useEffect(() => {
    if (createdSuccessfully) closeModal();
  }, [createdSuccessfully]);

  return (
    <Modal
      open={isModalOpened}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <CloseBtn onClick={handleModal} />

        <StyledTypography id="modal-modal-title" variant="h5" component="h2">
          아이템 추가
        </StyledTypography>

        <ContainerBox>
          <InsideBox>
            <StyledLabel>상품명</StyledLabel>
            <StyledTextField id="outlined-name" onChange={handleItemName} />
          </InsideBox>
        </ContainerBox>

        <ImageContainerBox>
          <StyledLabel>대표사진 등록</StyledLabel>
          <ThumbnailImageDragDrop
            thumbnailPic={thumbnailPic}
            setThumbNailPic={setThumbNailPic}
          />
        </ImageContainerBox>

        <ImageContainerBox>
          <StyledLabel>추가사진 등록</StyledLabel>
          <ExtraImageDragDrop
            extraPics={extraPics}
            setExtraPics={setExtraPics}
          />
        </ImageContainerBox>

        <StatusRadioBox>
          <InsideRadioBox>
            <StyledLabel>상태</StyledLabel>
            <StatusContentBox>
              <StatusRadio>
                <StyledRadio {...statusControlProps('1')} />
                <RadioLabel>최상</RadioLabel>
              </StatusRadio>
              <StatusRadio>
                <StyledRadio {...statusControlProps('2')} />
                <RadioLabel>중상</RadioLabel>
              </StatusRadio>
              <StatusRadio>
                <StyledRadio {...statusControlProps('3')} />
                <RadioLabel>중</RadioLabel>
              </StatusRadio>
              <StatusRadio>
                <StyledRadio {...statusControlProps('4')} />
                <RadioLabel>중하</RadioLabel>
              </StatusRadio>
              <StatusRadio>
                <StyledRadio {...statusControlProps('5')} />
                <RadioLabel>최하</RadioLabel>
              </StatusRadio>
            </StatusContentBox>
          </InsideRadioBox>
        </StatusRadioBox>

        <CategoryRadioBox>
          <InsideRadioBox>
            <StyledLabel>카테고리</StyledLabel>
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
          </InsideRadioBox>
        </CategoryRadioBox>

        <ContainerBox>
          <InsideBox>
            <StyledLabel>개수</StyledLabel>
            <InputQuantityBox>
              <InputQuantity value={quantity} onChange={handleQuantity} min="1" max="100"/>
            </InputQuantityBox>
          </InsideBox>
        </ContainerBox>

        <DescriptionInputContainer>
          <StyledLabel>아이템 설명 </StyledLabel>
          <ItemTextarea
            ref={editorRef}
            onChange={handleItemDesc}
            placeholder="내용을 입력해주세요."
          ></ItemTextarea>
        </DescriptionInputContainer>

        <SubmitButtonContainer>
          <AddBtn variant="outlined" onClick={submit}>
            추가
          </AddBtn>
        </SubmitButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AddItemModal;
