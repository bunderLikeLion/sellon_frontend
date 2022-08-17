import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {
  DropzoneContainer,
  MultipleContainer,
  MultiThumbContainer,
  RemoveBtn,
  Thumb,
  ThumbImg,
  ThumbInner,
} from './styles';

const ExtraImageDragDrop = ({ extraPics, setExtraPics }) => {
  const uploadFileFunc = (acceptedFiles) => {
    if (extraPics.length <= 1) {
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
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )[0],
      ]);
    }
  };

  const removePic = (name) => {
    const newList = Number.isInteger(name)
      ? extraPics.filter((elem) => elem.id !== name)
      : extraPics.filter((elem) => elem.name !== name);
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
              <RemoveBtn onClick={() => removePic(file.name || file.id)} />
              <ThumbImg
                src={file.preview || file.file}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            </ThumbInner>
          </Thumb>
        ))}
        {extraPics.length < 2 && (
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
