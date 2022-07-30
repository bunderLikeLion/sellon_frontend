import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { FileUploader } from 'react-drag-drop-files';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FormControl, InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { DropzoneArea } from 'material-ui-dropzone';

const ModalContainer = styled(Box)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background-color: #3d3d3d;
  color: white;
  border: 2px solid #000;
  padding: 20px;
  //box-shadow: 24px;
  overflow-y: scroll;

  .dropzone-text {
    color: blue;
  }
`;

const CloseBtn = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: blue;
  cursor: pointer;
`;

const EditorBlock = styled.div`
  .wrapper-class {
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  .toolbar {
    background: #c9c9c9;
    color: black;
  }

  .editor {
    height: 10rem !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
    background: #c9c9c9;
    color: black;
  }
`;

const AddItemModal = ({ handleModal, isModalOpened }) => {
  const [thumbnailPic, setThumbNailPic] = useState(null);
  const [extraPics, setExtraPics] = useState(null);
  const [text, setText] = useState(null);
  const [status, setStatus] = useState(3);
  const [category, setCategory] = useState(null);

  const handleThumbnailPicChange = (file) => {
    setThumbNailPic(file);
  };

  const handleExtraPicsChange = (file) => {
    setExtraPics(file);
  };

  const handleEditorTextChange = (text) => {
    setText(text);
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const fileTypes = ['JPEG', 'PNG', 'GIF'];

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
        <DropzoneArea
          acceptedFiles={['image/*']}
          dropzoneText={"아이템의 대표 '이미지'를 등록해주세요."}
          dropzoneClass="dropzone-container"
          dropzoneParagraphClass="dropzone-text"
          filesLimit={1}
          onChange={(files) => console.log('Files:', files)}
        />
        <p>
          {thumbnailPic
            ? `File name: ${thumbnailPic[0].name}`
            : 'no files uploaded yet'}
        </p>
        <p>아이템 설명 </p>
        <EditorBlock>
          <Editor
            editorState={text}
            wrapperClassName="wrapper-class"
            // 에디터 주변에 적용된 클래스
            editorClassName="editor"
            // 툴바 주위에 적용된 클래스
            toolbarClassName="toolbar"
            onEditorStateChange={handleEditorTextChange}
          />
        </EditorBlock>
        <p>추가사진 등록</p>
        <FileUploader
          multiple={true}
          handleChange={handleExtraPicsChange}
          name="file"
          label="아이템의 대표 사진을 등록해주세요"
          types={fileTypes}
        />
        <p>
          {extraPics
            ? `File name: ${extraPics[0].name}`
            : 'no files uploaded yet'}
        </p>
        <p>상태</p>
        <FormControl>
          <InputLabel id="demo-simple-select-label">상태</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={1}>최상</MenuItem>
            <MenuItem value={2}>중상</MenuItem>
            <MenuItem value={3}>중</MenuItem>
            <MenuItem value={4}>중하</MenuItem>
            <MenuItem value={5}>최하</MenuItem>
          </Select>
        </FormControl>
        <p>카테고리</p>
        <FormControl>
          <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="상의">상의</MenuItem>
            <MenuItem value="신발">신발</MenuItem>
            <MenuItem value="앨범">앨범</MenuItem>
          </Select>
        </FormControl>

        <DropzoneArea
          acceptedFiles={['image/*']}
          dropzoneText={'Drag and drop an image here or click'}
          filesLimit={1}
          onChange={(files) => console.log(files)}
        />
      </ModalContainer>
    </Modal>
  );
};

export default AddItemModal;
