import styled from 'styled-components';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const ThumbContainer = styled.aside``;

export const MultiThumbContainer = styled.aside`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 13rem;
  border: 3px solid transparent;
  border-radius: 1rem;
  color: #ffffff !important;
  // background-origin: border-box !important;
  // background-clip: content-box, border-box !important;
  // background-image: linear-gradient(
  //     ${(props) => props.theme.color_background__default},
  //     ${(props) => props.theme.color_background__default}
  //   ),
  //   ${(props) => props.theme.color_border__hover} !important;
`;

export const Thumb = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  height: 5rem;
  margin: 10px;
  border-radius: 2px;
`;

export const ThumbInner = styled.div`
  position: relative;
  display: flex;
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
  width: 6rem;
  border: 3px solid transparent;
  border-radius: 1rem;
  color: #ffffff !important;
  // background-origin: border-box !important;
  // background-clip: content-box, border-box !important;
  // background-image: linear-gradient(
  //     ${(props) => props.theme.color_background__default},
  //     ${(props) => props.theme.color_background__default}
  //   ),
  //   ${(props) => props.theme.color_border__hover} !important;

  .dropzone {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin: 10px;
    border: 3px solid transparent;
    border-radius: 1rem;
    cursor: pointer;
    background: ${(props) => props.theme.color_background__secondary};
  //   background-origin: border-box !important;
  //   background-clip: content-box, border-box !important;
  //   background-image: linear-gradient(
  //       ${(props) => props.theme.color_background__default},
  //       ${(props) => props.theme.color_background__default}
  //     ),
  //     ${(props) => props.theme.color_border__hover} !important;
  // }
`;

export const MultipleContainer = styled.section`
  display: flex;
  align-items: center;
  font-size: 0.6rem;

  .dropzone {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    margin: 10px;
    border: 3px solid transparent;
    border-radius: 1rem;
    cursor: pointer;
    background: ${(props) => props.theme.color_background__secondary};
    // background-origin: border-box !important;
    // background-clip: content-box, border-box !important;
    // background-image: linear-gradient(
    //     ${(props) => props.theme.color_background__default},
    //     ${(props) => props.theme.color_background__default}
    //   ),
    //   ${(props) => props.theme.color_border__hover} !important;
  }
`;

export const RemoveBtn = styled(RemoveCircleIcon)`
  position: absolute;
  right: 0;
  cursor: pointer;
  color: #f00;
`;

export const DropzoneContainer = styled.div``;
