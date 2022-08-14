import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

const AccordionContainer = styled.div`
  clear: both;
  width: 95%;
  margin: 1rem;
`;

const StyledAccordion = styled(Accordion)`
  border-radius: 1rem !important;
  background: ${(props) => props.theme.color_background__secondary} !important;
  color: ${(props) => props.theme.color_font__primary} !important;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 3rem;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  height: 3rem;

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
  margin-left: 1rem;
  padding-left: 1rem;
`;

const ModifyBtn = styled.button`
  width: 7rem;
  margin: 0 1rem 0 auto;
  font-weight: 700;
`;

const ChangedInfoInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 20rem;
  height: 3rem;
  margin: 0 1rem;
  padding: 0 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  opacity: 70%;
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_font__secondary};
  ::placeholder {
    font-size: 1.2rem;
    color: ${(props) => props.theme.color_font__secondary};
  }
  //자동완성 글씨, 배경 자동 변경 방지 설정
  :-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.theme.color_font__secondary} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const ChangeEmailBox = () => {
  const user = useRecoilValue(userAtom);
  const [expanded, setExpanded] = useState(false);
  const [isShown, setIsShown] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setIsShown(!isShown);
  };

  const handleClick = () => {
    handleChange();
  };

  return (
    <AccordionContainer>
      <StyledAccordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        {/* 아코디언 닫혔을 때 */}
        <StyledAccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <SubHeader>이메일</SubHeader>
          <OriginalInfo>{user?.email}</OriginalInfo>
          {isShown && <ModifyBtn onClick={handleClick}>이메일 변경</ModifyBtn>}
        </StyledAccordionSummary>

        {/* 아코디언 열렸을 때 */}
        <StyledAccordionDetails>
          <SubHeader>새 이메일</SubHeader>
          <ChangedInfoInput />
        </StyledAccordionDetails>
      </StyledAccordion>
    </AccordionContainer>
  );
};

export default ChangeEmailBox;
