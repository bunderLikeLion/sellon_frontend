import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {
  Container,
  RemoveBtn,
  Thumb,
  ThumbContainer,
  ThumbImg,
  ThumbInner,
} from './styles';

const ImageDragDrop = ({
  isSingleNeeded,
  thumbnailPic,
  extraPics,
  setThumbNailPic,
  setExtraPics,
}) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      if (isSingleNeeded) {
        setThumbNailPic([
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )[0],
        ]);
      } else {
        if (files.length <= 2) {
          setExtraPics([
            ...files,
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )[0],
          ]);
        } else {
          setExtraPics([
            files[1],
            files[2],
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )[0],
          ]);
        }
      }
    },
  });

  const removePic = (name) => {
    const newList = files.filter((item) => item.name !== name);
    setFiles(newList);
  };

  const thumbs = isSingleNeeded
    ? thumbnailPic.map((file) => (
        <Thumb key={file.name}>
          <ThumbInner>
            <RemoveBtn onClick={() => removePic(file.name)} />
            <ThumbImg
              src={file.preview}
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </ThumbInner>
        </Thumb>
      ))
    : extraPics.map((file) => (
        <Thumb key={file.name}>
          <ThumbInner>
            <RemoveBtn onClick={() => removePic(file.name)} />
            <ThumbImg
              src={file.preview}
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </ThumbInner>
        </Thumb>
      ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Container>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>
          끌어서 놓으시거나, 클릭하여 {isSingleNeeded ? '1' : '최대 3'}장의
          이미지를 등록해주세요
        </p>
        <AddAPhotoIcon />
      </div>
      <ThumbContainer>{thumbs}</ThumbContainer>
    </Container>
  );
};

export default ImageDragDrop;
