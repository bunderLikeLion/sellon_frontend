import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {
  Container,
  DropzoneContainer,
  RemoveBtn,
  Thumb,
  ThumbContainer,
  ThumbImg,
  ThumbInner,
} from './styles';

const ThumbnailImageDragDrop = ({ thumbnailPic, setThumbNailPic }) => {
  const uploadFileFunc = (acceptedFiles) => {
    setThumbNailPic([
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )[0],
    ]);
  };

  const removePic = () => {
    const newList = [];
    setThumbNailPic(newList);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => uploadFileFunc(acceptedFiles),
  });

  return (
    <Container hasPic={thumbnailPic.length}>
      {!thumbnailPic.length && (
        <DropzoneContainer {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <AddAPhotoIcon />
        </DropzoneContainer>
      )}
      <ThumbContainer>
        {thumbnailPic.map((file) => (
          <Thumb key={file.name}>
            <ThumbInner>
              <RemoveBtn onClick={() => removePic()} />
              <ThumbImg
                src={file.preview}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            </ThumbInner>
          </Thumb>
        ))}
      </ThumbContainer>
    </Container>
  );
};

export default ThumbnailImageDragDrop;
