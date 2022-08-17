import styled from 'styled-components';
import {
  CategoryContentBox,
  InsideRadioBox,
  StatusRadio,
  StatusRadioBox,
  StyledLabel,
  StyledRadio,
} from '../MyPage/AddItemModal';

const AuctionTitleContainer = styled.div`
  clear: both;
  margin: 0 1rem;
`;

const SubHeader = styled.p`
  width: 6rem;
  margin: 0 0.5rem 0.5rem 0;
  font-weight: 300;
  font-size: 1.2rem;
`;

const AuctionTitle = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
  background-color: ${(props) => props.theme.color_background__primary};

  :focus-visible {
    outline: none;
  }
`;

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
`;

const RadioContainer = styled(StatusRadioBox)`
  margin: 0 1rem 1rem 1rem;
  width: 28rem;
  height: 4rem;
`;

const InsideRadioBoxContainer = styled(InsideRadioBox)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

const StyledLabelText = styled(StyledLabel)`
  width: 10rem;
  margin: 0;
`;

const AuctionText = styled.textarea`
  width: 100%;
  height: 12rem;
  resize: none;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.color_font__secondary};
  background-color: ${(props) => props.theme.color_background__primary};

  :focus-visible {
    outline: none;
  }
`;

const StatusRadioContainer = styled(StatusRadio)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 8.5rem !important;
  margin-top: 0 !important;
  flex: 1;
`;

const RadioLabel = styled.label`
  color: ${(props) => props.theme.color_font__secondary};
`;

const NewAuctionInput = (props) => {
  const timeControlProps = (item) => ({
    checked: props.auctionTime === item,
    onChange: props.auctionTimeHandler,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const methodControlProps = (item) => ({
    checked: props.auctionMethod === item,
    onChange: props.auctionMethodHandler,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <>
      <AuctionTitleContainer>
        <SubHeader>경매 제목</SubHeader>
        <AuctionTitle
          value={props.auctionTitle}
          onChange={props.auctionTitleHandler}
        />
      </AuctionTitleContainer>

      <TextareaContainer>
        <SubHeader>글 작성</SubHeader>
        <AuctionText
          placeholder="경매장에 대한 설명을 적어주세요.&#10;예시 1) 전 굿즈 물건들과 거래하고 싶어요!&#10;예시 2) 재미있는 물건들을 이 책과 거래하고 싶어요!"
          value={props.auctionDesc}
          onChange={props.auctionDescHandler}
        />
      </TextareaContainer>

      <RadioContainer>
        <InsideRadioBoxContainer>
          <StyledLabelText>경매 기간</StyledLabelText>
          <CategoryContentBox>
            <StatusRadioContainer>
              <StyledRadio {...timeControlProps('1')} />
              <RadioLabel>하루</RadioLabel>
            </StatusRadioContainer>
            <StatusRadioContainer>
              <StyledRadio {...timeControlProps('7')} />
              <RadioLabel>일주일</RadioLabel>
            </StatusRadioContainer>
          </CategoryContentBox>
        </InsideRadioBoxContainer>
      </RadioContainer>

      <RadioContainer>
        <InsideRadioBoxContainer>
          <StyledLabelText>거래 방법</StyledLabelText>
          <CategoryContentBox>
            {/*<StatusRadioContainer>*/}
            {/*  <StyledRadio {...methodControlProps('all')} />*/}
            {/*  <RadioLabel>전체</RadioLabel>*/}
            {/*</StatusRadioContainer>*/}
            <StatusRadioContainer>
              <StyledRadio {...methodControlProps('direct')} />
              <RadioLabel>직거래</RadioLabel>
            </StatusRadioContainer>
            <StatusRadioContainer>
              <StyledRadio {...methodControlProps('delivery')} />
              <RadioLabel>택배</RadioLabel>
            </StatusRadioContainer>
          </CategoryContentBox>
        </InsideRadioBoxContainer>
      </RadioContainer>
    </>
  );
};

export default NewAuctionInput;
