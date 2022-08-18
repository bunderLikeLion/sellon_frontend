import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useEffect, useState } from 'react';
import ExtraImageDragDrop from 'components/MyPage/ItemAddForm/ImageDragDrop/ExtraImageDragDrop';
import CardMedia from '@mui/material/CardMedia';

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

const OriginalInfo = styled(CardMedia)`
  margin-left: 1rem;
  padding-left: 1rem;
  width: 4rem;
  height: 4rem;
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

const ChangeItemExtraImage = ({ givenExtraImages, editSingleField }) => {
  const [isShown, setIsShown] = useState(false);
  const [extraPics, setExtraPics] = useState([]);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleSubmit = async () => {
    const frm = new FormData();
    extraPics.forEach((single, idx) => {
      if (single.id) {
        frm.append('image_ids', single.id);
      } else {
        frm.append(`images[${idx}]file`, single);
      }
    });
    await editSingleField(frm, true);
    await setExtraPics([]);
    handleClick();
  };

  useEffect(() => {
    setExtraPics(givenExtraImages);
  }, [givenExtraImages]);

  return (
    <AccordionContainer>
      <StyledAccordion expanded={isShown} onChange={handleClick}>
        {/* 아코디언 닫혔을 때 */}
        <StyledAccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <SubHeader>추가사진</SubHeader>
          {!isShown &&
            givenExtraImages.map((singleImg) => {
              return <OriginalInfo image={singleImg?.file} />;
            })}
          {!isShown && (
            <ModifyBtn onClick={handleClick}>추가사진 변경</ModifyBtn>
          )}
        </StyledAccordionSummary>

        {/* 아코디언 열렸을 때 */}
        <StyledAccordionDetails>
          <InsideContainer>
            <SubHeader>새 추가사진</SubHeader>
            <ExtraImageDragDrop
              extraPics={extraPics}
              setExtraPics={setExtraPics}
            />
          </InsideContainer>
          <ButtonContainer>
            <ModifyButton onClick={handleSubmit}>수정</ModifyButton>
            <CancelButton onClick={handleClick}>취소</CancelButton>
          </ButtonContainer>
        </StyledAccordionDetails>
      </StyledAccordion>
    </AccordionContainer>
  );
};

export default ChangeItemExtraImage;
