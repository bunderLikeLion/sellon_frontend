import styled from 'styled-components';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const ThumbContainer = styled.aside``;

export const MultiThumbContainer = styled.aside`
  display: flex;
  width: 13rem;
  flex-direction: row;
  flex-wrap: wrap;
  border: 3px solid transparent;
  background-image: linear-gradient(
      ${(props) => props.theme.color_background__default},
      ${(props) => props.theme.color_background__default}
    ),
    ${(props) => props.theme.color_border__hover} !important;
  color: #ffffff !important;
  background-origin: border-box !important;
  background-clip: content-box, border-box !important;
  border-radius: 1rem;
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
  border: 3px solid transparent;
  background-image: linear-gradient(
      ${(props) => props.theme.color_background__default},
      ${(props) => props.theme.color_background__default}
    ),
    ${(props) => props.theme.color_border__hover} !important;
  color: #ffffff !important;
  background-origin: border-box !important;
  background-clip: content-box, border-box !important;
  border-radius: 1rem;
  width: 6rem;

  .dropzone {
    margin: 10px;
    width: 100%;
    height: 4rem;
    border: 3px solid transparent;
    background-image: linear-gradient(
        ${(props) => props.theme.color_background__default},
        ${(props) => props.theme.color_background__default}
      ),
      ${(props) => props.theme.color_border__hover} !important;
    background-origin: border-box !important;
    background-clip: content-box, border-box !important;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const MultipleContainer = styled.section`
  display: flex;
  align-items: center;
  font-size: 0.6rem;

  .dropzone {
    margin: 10px;
    width: 5rem;
    height: 5rem;
    border: 3px solid transparent;
    background-image: linear-gradient(
        ${(props) => props.theme.color_background__default},
        ${(props) => props.theme.color_background__default}
      ),
      ${(props) => props.theme.color_border__hover} !important;
    background-origin: border-box !important;
    background-clip: content-box, border-box !important;
    border-radius: 1rem;
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
