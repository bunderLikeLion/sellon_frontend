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
          ???? ????????? ??????
        </Typography>
        <h1>???????????? ??????</h1>
        <ThumbnailImageDragDrop
          thumbnailPic={thumbnailPic}
          setThumbNailPic={setThumbNailPic}
        />
        <p>???????????? ??????</p>
        <ExtraImageDragDrop extraPics={extraPics} setExtraPics={setExtraPics} />
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">????????????</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleCategoryChange}
          >
            <MenuItem value="??????">??????</MenuItem>
            <MenuItem value="??????">??????</MenuItem>
            <MenuItem value="??????">??????</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">??????</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Age"
            onChange={handleStatusChange}
          >
            <MenuItem value={1}>??????</MenuItem>
            <MenuItem value={2}>??????</MenuItem>
            <MenuItem value={3}>???</MenuItem>
            <MenuItem value={4}>??????</MenuItem>
            <MenuItem value={5}>??????</MenuItem>
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
          label="??????"
        />
        <p>????????? ?????? </p>
        <Editor
          ref={editorRef} // DOM ????????? useRef
          placeholder="????????? ??????????????????."
          previewStyle="vertical" // ???????????? ????????? ??????
          height="300px" // ????????? ??? ??????
          initialEditType="wysiwyg" //
          toolbarItems={[
            // ?????? ?????? ??????
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
          ]}
          useCommandShortcut={false} // ????????? ?????? ????????? ??????
          theme="dark"
        />
        <Button variant="outlined" onClick={submit}>
          ??????
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default AddItemModal;
