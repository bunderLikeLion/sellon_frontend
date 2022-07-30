import styled from 'styled-components';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const ThumbContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  margin: 10px;
  width: 100px;
  height: 100px;
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
  width: auto;
  height: 100%;
`;

export const Container = styled.section`
  margin-top: 1rem;
  border: 1px solid #0965be;
  width: 50%;
  font-size: 0.6rem;

  .dropzone {
    margin: 10px;
    height: 4rem;
    border: 1px dashed #0965be;
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
