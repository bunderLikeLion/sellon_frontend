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
  background: #d9d9d9;
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
  height: 100%;
`;

const StyledLabelText = styled(StyledLabel)`
  width: 7rem;
  margin: 0;
`;

const AuctionText = styled.textarea`
  width: 100%;
  height: 12rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: #d9d9d9;
`;

const StatusRadioContainer = styled(StatusRadio)`
  width: 8rem;
  margin: 0 0 0 2rem;
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
