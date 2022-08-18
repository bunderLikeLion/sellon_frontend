import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState, useRef } from 'react';
import useInput from 'hooks/useInput';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { useForm } from 'react-hook-form';
import registerValidation from 'validations/registerValidation';
import { Link } from 'react-router-dom';

const AccordionContainer = styled.div`
  clear: both;
  width: 95%;
  margin: 1rem;
`;

const StyledAccordion = styled(Accordion)`
  border-radius: 1rem !important;
  background: ${(props) => props.theme.color_background__primary} !important;
  color: ${(props) => props.theme.color_font__primary} !important;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 3rem;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  height: 6rem;
  min-height: 0 !important;

  & .MuiAccordionSummary-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
const SubHeader = styled.div`
  width: 9rem;
`;

const OriginalInfo = styled.div`
  width: 20rem;
  margin-left: 1rem;
  padding-left: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  font-size: 1.2rem;
`;

const ModifyBtn = styled.button`
  width: 7rem;
  height: 1.7rem;
  margin: 0 1rem 0 auto;
  border-radius: 0.4rem;
  border: none;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_button__delete};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  margin-top: 1rem;
`;

const ModifyButton = styled.button`
  width: 5.8rem;
  height: 1.7rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__success};
`;

const CancelButton = styled.button`
  width: 5.8rem;
  height: 1.7rem;
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_button__delete};
`;

const InsideContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ItemTextarea = styled.textarea`
  width: 40rem;
  height: 12rem;
  resize: none;
  padding: 1rem;
  margin-top: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__secondary};
`;

const ChangeItemTextarea = ({ givenDesc, editSingleField, imgToLeft }) => {
  const editorRef = useRef();
  const [isShown, setIsShown] = useState(false);
  const [itemDesc, handleItemDesc, resetHandleItemDesc] = useInput(givenDesc);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleSubmit = async () => {
    const frm = new FormData();
    frm.append('description', itemDesc);
    for (let singleImgId of imgToLeft) {
      frm.append('image_ids', singleImgId);
    }
    await editSingleField(frm);
    await resetHandleItemDesc();
    handleClick();
  };

  return (
    <AccordionContainer>
      <StyledAccordion expanded={isShown} onChange={handleClick}>
        {/* 아코디언 닫혔을 때 */}
        <StyledAccordionSummary>
          <SubHeader>상세정보</SubHeader>
          <OriginalInfo>{givenDesc}</OriginalInfo>
          {!isShown && (
            <ModifyBtn onClick={handleClick}>상세정보 변경</ModifyBtn>
          )}
        </StyledAccordionSummary>

        {/* 아코디언 열렸을 때 */}
        <StyledAccordionDetails>
          <InsideContainer>
            <SubHeader>새 상세정보</SubHeader>
            <ItemTextarea
              ref={editorRef}
              value={itemDesc}
              onChange={handleItemDesc}
              placeholder="내용을 입력해주세요."
            />
          </InsideContainer>
          <ButtonContainer>
            <ModifyButton disabled={!itemDesc} onClick={handleSubmit}>
              수정
            </ModifyButton>
            <CancelButton onClick={handleClick}>취소</CancelButton>
          </ButtonContainer>
        </StyledAccordionDetails>
      </StyledAccordion>
    </AccordionContainer>
  );
};

export default ChangeItemTextarea;
