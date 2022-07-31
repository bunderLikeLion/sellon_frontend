import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {
  Container,
  DropzoneContainer,
  MultipleContainer,
  MultiThumbContainer,
  RemoveBtn,
  Thumb,
  ThumbContainer,
  ThumbImg,
  ThumbInner,
} from './styles';
import styled from 'styled-components';

const ExtraImageDragDrop = ({ extraPics, setExtraPics }) => {
  const uploadFileFunc = (acceptedFiles) => {
    if (extraPics.length <= 2) {
      setExtraPics([
        ...extraPics,
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )[0],
      ]);
    } else {
      setExtraPics([
        extraPics[1],
        extraPics[2],
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )[0],
      ]);
    }
  };

  const removePic = (name) => {
    const newList = extraPics.filter((elem) => elem.name !== name);
    setExtraPics(newList);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => uploadFileFunc(acceptedFiles),
  });

  return (
    <MultipleContainer>
      <MultiThumbContainer>
        {extraPics.map((file) => (
          <Thumb key={file.name}>
            <ThumbInner>
              <RemoveBtn onClick={() => removePic(file.name)} />
              <ThumbImg
                src={file.preview}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            </ThumbInner>
          </Thumb>
        ))}
        {extraPics.length < 3 && (
          <DropzoneContainer {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <AddAPhotoIcon />
          </DropzoneContainer>
        )}
      </MultiThumbContainer>
    </MultipleContainer>
  );
};

export default ExtraImageDragDrop;
