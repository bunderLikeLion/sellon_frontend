import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { useForm } from 'react-hook-form';
import registerValidation from 'validations/registerValidation';
import { Link } from 'react-router-dom';
import { Radio } from '@mui/material';
import useInput from 'hooks/useInput';
import statusHandler from '../../../utils/statusHandler';

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
  height: 3rem;
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
  margin-left: 1rem;
  padding-left: 1rem;
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
  background: ${(props) => props.theme.color_background__secondary};
  color: ${(props) => props.theme.color_white};
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

const StatusContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const RadioLabel = styled.label`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

export const StyledRadio = styled(Radio)`
  padding-left: 0 !important;
  color: ${(props) => props.theme.color_white} !important;

  &:hover {
    background: transparent !important;
  }
`;

const SingleRadio = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  margin-top: 1rem;
`;

export const StatusRadio = styled(SingleRadio)`
  width: 5rem;
`;

const ChangeItemStatus = ({ givenQuality, editSingleField, imgToLeft }) => {
  const [status, handleStatus, statusReset] = useInput(givenQuality.toString());

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const statusControlProps = (item) => ({
    checked: status === item,
    onChange: handleStatus,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const handleSubmit = async () => {
    const frm = new FormData();
    frm.append('quality', +status);
    for (let singleImgId of imgToLeft) {
      frm.append('image_ids', singleImgId);
    }
    await editSingleField(frm);
    handleClick();
  };

  return (
    <AccordionContainer>
      <StyledAccordion expanded={isShown} onChange={handleClick}>
        {/* 아코디언 닫혔을 때 */}
        <StyledAccordionSummary>
          <SubHeader>아이템 상태</SubHeader>
          <OriginalInfo>{statusHandler(givenQuality)}</OriginalInfo>
          {!isShown && <ModifyBtn onClick={handleClick}>상태 변경</ModifyBtn>}
        </StyledAccordionSummary>

        {/* 아코디언 열렸을 때 */}
        <StyledAccordionDetails>
          <InsideContainer>
            <SubHeader />
            <StatusContentBox>
              <StatusRadio>
                <StyledRadio {...statusControlProps('5')} />
                <RadioLabel>최상</RadioLabel>
              </StatusRadio>
              <StatusRadio>
                <StyledRadio {...statusControlProps('4')} />
                <RadioLabel>중상</RadioLabel>
              </StatusRadio>
              <StatusRadio>
                <StyledRadio {...statusControlProps('3')} />
                <RadioLabel>중</RadioLabel>
              </StatusRadio>
              <StatusRadio>
                <StyledRadio {...statusControlProps('2')} />
                <RadioLabel>중하</RadioLabel>
              </StatusRadio>
              <StatusRadio>
                <StyledRadio {...statusControlProps('1')} />
                <RadioLabel>최하</RadioLabel>
              </StatusRadio>
            </StatusContentBox>
          </InsideContainer>
          <ButtonContainer>
            <ModifyButton disabled={!status} onClick={handleSubmit}>
              수정
            </ModifyButton>
            <CancelButton onClick={handleClick}>취소</CancelButton>
          </ButtonContainer>
        </StyledAccordionDetails>
      </StyledAccordion>
    </AccordionContainer>
  );
};

export default ChangeItemStatus;
