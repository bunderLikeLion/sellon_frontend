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
import { useRef, useState } from 'react';
import { FormControl, InputLabel, Select, TextField } from '@mui/material';
import ThumbnailImageDragDrop from 'components/MyPage/ItemAddForm/ImageDragDrop/ThumbnailImageDragDrop';
import ExtraImageDragDrop from './ItemAddForm/ImageDragDrop/ExtraImageDragDrop';

const ModalContainer = styled(Box)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 70%;
  background-color: #3d3d3d;
  color: white;
  border: 2px solid #000;
  padding: 20px;
  overflow-y: scroll;
`;

const CloseBtn = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: blue;
  cursor: pointer;
`;

const AddItemModal = ({ handleModal, isModalOpened }) => {
  const [thumbnailPic, setThumbNailPic] = useState([]);
  const [extraPics, setExtraPics] = useState([]);
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const editorRef = useRef();

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const submit = () => {
    const desc = editorRef.current?.getInstance().getHTML();
  };

  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <CloseBtn onClick={handleModal} />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          🌃 아이템 추가
        </Typography>
        <h1>대표사진 등록</h1>
        <ThumbnailImageDragDrop
          thumbnailPic={thumbnailPic}
          setThumbNailPic={setThumbNailPic}
        />
        <p>추가사진 등록</p>
        <ExtraImageDragDrop extraPics={extraPics} setExtraPics={setExtraPics} />
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleCategoryChange}
          >
            <MenuItem value="상의">상의</MenuItem>
            <MenuItem value="신발">신발</MenuItem>
            <MenuItem value="앨범">앨범</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">상태</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Age"
            onChange={handleStatusChange}
          >
            <MenuItem value={1}>최상</MenuItem>
            <MenuItem value={2}>중상</MenuItem>
            <MenuItem value={3}>중</MenuItem>
            <MenuItem value={4}>중하</MenuItem>
            <MenuItem value={5}>최하</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          InputProps={{
            inputProps: {
              max: 100,
              min: 1,
            },
          }}
          label="갯수"
        />
        <p>아이템 설명 </p>
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
