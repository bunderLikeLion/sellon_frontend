import styled from 'styled-components';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const ThumbContainer = styled.aside``;

export const MultiThumbContainer = styled.aside`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  margin: 10px;
  //width: 33%;
  height: 5rem;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  position: relative;
  min-width: 0;
  overflow: hidden;
`;

export const ThumbImg = styled.img`
  display: block;
  width: 5rem;
  height: 100%;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid #a117f4;
  width: ${(props) => (props.hasPic ? '15%' : '45%')};
  //width: 45%;
  font-size: 0.6rem;

  .dropzone {
    margin: 10px;
    padding: 1rem;
    width: 100%;
    height: 4rem;
    border: 1px dashed #a117f4;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const MultipleContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid #a117f4;
  width: 45%;
  font-size: 0.6rem;

  .dropzone {
    margin: 10px;
    width: 5rem;
    height: 5rem;
    border: 1px dashed #a117f4;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const RemoveBtn = styled(RemoveCircleIcon)`
  position: absolute;
  right: 0;
  color: red;
  cursor: pointer;
`;

export const DropzoneContainer = styled.div``;
