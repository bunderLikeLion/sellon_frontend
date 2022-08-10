import { Container } from 'pages/NewAuction/NewAuction';
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
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-weight: 700;
  font-size: 1rem;
`;

const AuctionTitle = styled.input.attrs((props) => ({
  type: 'text',
}))`
  background: grey;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 1rem;
`;

const TextareaContainer = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const AuctionText = styled.textarea`
  background: grey;
  height: 20rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
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
        <SubHeader>경매글 제목</SubHeader>
        <AuctionTitle
          value={props.auctionTitle}
          onChange={props.auctionTitleHandler}
        />
      </AuctionTitleContainer>

      <TextareaContainer>
        <SubHeader>경매글 내용</SubHeader>
        <AuctionText
          value={props.auctionDesc}
          onChange={props.auctionDescHandler}
        />
      </TextareaContainer>

      <StatusRadioBox>
        <InsideRadioBox>
          <StyledLabel>경매 기간</StyledLabel>
          <CategoryContentBox>
            <StatusRadio>
              <StyledRadio {...timeControlProps('1')} />
              <RadioLabel>하루</RadioLabel>
            </StatusRadio>
            <StatusRadio>
              <StyledRadio {...timeControlProps('7')} />
              <RadioLabel>일주일</RadioLabel>
            </StatusRadio>
          </CategoryContentBox>
        </InsideRadioBox>
      </StatusRadioBox>

      <StatusRadioBox>
        <InsideRadioBox>
          <StyledLabel>거래 방법</StyledLabel>
          <CategoryContentBox>
            <StatusRadio>
              <StyledRadio {...methodControlProps('direct')} />
              <RadioLabel>직거래</RadioLabel>
            </StatusRadio>
            <StatusRadio>
              <StyledRadio {...methodControlProps('delivery')} />
              <RadioLabel>택배</RadioLabel>
            </StatusRadio>
          </CategoryContentBox>
        </InsideRadioBox>
      </StatusRadioBox>
    </>
  );
};

export default NewAuctionInput;
