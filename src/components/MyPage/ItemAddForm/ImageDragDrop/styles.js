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
  border: 2px solid transparent;
  border-image: ${(props) => props.theme.color_border__hover} 1;
  width: 6rem;
  font-size: 0.6rem;

  .dropzone {
    margin: 10px;
    padding: 1rem;
    width: 100%;
    height: 4rem;
    border: 2px solid transparent;
    border-image: ${(props) => props.theme.color_border__hover} 1;
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
  border: 2px solid transparent;
  border-image: ${(props) => props.theme.color_border__hover} 1;
  width: 13rem;
  font-size: 0.6rem;

  .dropzone {
    margin: 10px;
    width: 5rem;
    height: 5rem;
    border: 2px solid transparent;
    border-image: ${(props) => props.theme.color_border__hover} 1;
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
