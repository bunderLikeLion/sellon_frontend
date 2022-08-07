import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useEffect, useRef, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Radio,
  Select,
  TextField,
} from '@mui/material';
import ThumbnailImageDragDrop from 'components/MyPage/ItemAddForm/ImageDragDrop/ThumbnailImageDragDrop';
import ExtraImageDragDrop from './ItemAddForm/ImageDragDrop/ExtraImageDragDrop';
import useCategoryQuery from 'queries/product/useCategoryQuery';
import useCreateProductMutation from 'queries/product/useCreateProductMutation';
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

const AddItemModal = ({ handleModal, isModalOpened }) => {
  const editorRef = useRef();
  const [thumbnailPic, setThumbNailPic] = useState([]);
  const [extraPics, setExtraPics] = useState([]);
  const [itemName, handleItemName, itemNameReset] = useInput('');
  const [status, handleStatus, statusReset] = useInput('');
  const [category, handleCategory, categoryReset] = useInput('');
  const [quantity, handleQuantity, quantityReset] = useInput('');

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
    frm.append('product_category_id', category);
    frm.append('name', itemName);
    frm.append('quality', status);
    frm.append('quantity', quantity);
    frm.append('description', editorRef.current?.getInstance().getHTML());
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          아이템 추가
        </Typography>

        <StyledLabel>상품명</StyledLabel>
        <StyledTextField id="outlined-name" onChange={handleItemName} />

        <StyledLabel>대표사진 등록</StyledLabel>
        <ThumbnailImageDragDrop
          thumbnailPic={thumbnailPic}
          setThumbNailPic={setThumbNailPic}
        />

        <StyledLabel>추가사진 등록</StyledLabel>
        <ExtraImageDragDrop extraPics={extraPics} setExtraPics={setExtraPics} />

        <CategoryRadioBox>
          <StyledLabel>카테고리</StyledLabel>
          <CategoryContentBox>
            {catFetched &&
              catData.map((singleCat) => {
                return (
                  <SingleRadio>
                    <StyledRadio {...catControlProps(`${singleCat.name}`)} />
                    <RadioLabel>{singleCat.name}</RadioLabel>
                  </SingleRadio>
                );
              })}
          </CategoryContentBox>
        </CategoryRadioBox>

        <CategoryRadioBox>
          <StyledLabel>상태</StyledLabel>
          <CategoryContentBox>
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
          </CategoryContentBox>
        </CategoryRadioBox>

        <TextField
          type="number"
          value={quantity}
          onChange={handleQuantity}
          InputProps={{
            inputProps: {
              max: 100,
              min: 1,
            },
          }}
          label="갯수"
        />
        <StyledLabel>아이템 설명 </StyledLabel>
        <Editor
          ref={editorRef} // DOM 선택용 useRef
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="300px" // 에디터 창 높이
          initialEditType="wysiwyg" //
          toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
          ]}
          useCommandShortcut={false} // 키보드 입력 컨트롤 방지
          theme="dark"
        />
        <Button variant="outlined" onClick={submit}>
          추가
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default AddItemModal;
