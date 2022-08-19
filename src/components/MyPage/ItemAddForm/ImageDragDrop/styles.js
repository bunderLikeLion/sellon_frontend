import styled from 'styled-components';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const ThumbContainer = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 25rem;
`;

export const MultiThumbContainer = styled.aside`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 13rem;
  padding: 1rem 0.8rem 0;
`;

export const Thumb = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  height: 5rem;
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
  width: 100%;
  padding: 1rem 0.8rem 0;
  border-radius: 1rem;

  .dropzone {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    cursor: pointer;
    background: ${(props) => props.theme.color_background__secondary};
  }
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
    border-radius: 1rem;
    cursor: pointer;
    background: ${(props) => props.theme.color_background__secondary};
  }
`;

export const RemoveBtn = styled(RemoveCircleIcon)`
  position: absolute;
  right: 0;
  cursor: pointer;
  color: #f00;
`;

export const DropzoneContainer = styled.div``;
