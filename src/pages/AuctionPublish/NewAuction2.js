import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  color: #fff;
`;

const BigContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 1rem;
`;

const BigText = styled.div`
  margin: 0.5rem 2rem;
  font-size: 2rem;
  font-weight: 700;
`;

const Button = styled.button`
  float: right;
  height: 3.5rem;
  width: 9rem;
  margin: 4rem 1rem 1rem 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  color: #fff;
  background: ${(props) => props.theme.color_background__success};
`;

const ItemImage = styled.div`
  float: left;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.imgUrl})`};
`;

const ItemExtraImage = styled.div`
  width: 40%;
  margin-right: 1rem;
  border-radius: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.imgUrl})`};
`;

const ItemImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  clear: both;
  padding: 1rem;
`;

const ItemExtraImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  float: left;
  height: 8rem;
  margin-top: 1rem;
  clear: both;
`;

const ItemDetailInformationContainer = styled.div`
  margin: 1rem;
  height: 100%;
`;

const ItemTitle = styled.p`
  margin: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

const ItemCondition = styled.p`
  margin: 1.2rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemConditionDetail = styled.div`
  width: 5rem;
  height: 1.5rem;
  margin: 1rem 2rem;
  text-align: center;
  line-height: normal;
  font-size: 1rem;
  border-radius: 0.8rem;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__success};
`;

const ItemCategory = styled.p`
  margin: 1.2rem;
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategoryDetail = styled.div`
  width: 5rem;
  margin: 1rem 2rem;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemInfoContainer = styled.div`
  width: 100%;
  height: 14rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  overflow-y: scroll;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__primary};

  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
`;

const SubHeader = styled.p`
  width: 6rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-weight: 700;
  font-size: 1rem;
`;

const AuctionTitleContainer = styled.div`
  margin: 2rem 1rem;
  clear: both;
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
  background: grey;
`;

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
`;

const AuctionText = styled.textarea`
  height: 20rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: grey;
`;

const AuctionDetailInformationContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4.5rem;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const Radio = styled.input.attrs((props) => ({ type: 'radio' }))`
  & {
    margin-left: 1rem;
  }
  &:checked {
    accent-color: black;
  }
`;

const RadioLabel = styled.label`
  color: ${(props) => props.theme.color_font__secondary};
`;

const RadioContainer = styled.div``;

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  margin-top: 1rem;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const NewAuction2 = () => {
  return (
    <WrapContainer>
      <TopContainer>
        <BigText>경매 열기</BigText>
        <BigContainer>
          <Container>
            <ItemImageContainer>
              <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
              <ItemExtraImageContainer>
                <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
                <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
              </ItemExtraImageContainer>
            </ItemImageContainer>

            <ItemDetailInformationContainer>
              <ItemTitle>나이키 덩크 로우</ItemTitle>
              <ItemDetailContainer>
                <ItemCondition>아이템 상태</ItemCondition>
                <ItemConditionDetail>좋음</ItemConditionDetail>
              </ItemDetailContainer>
              <ItemDetailContainer>
                <ItemCategory>카테고리</ItemCategory>
                <ItemCategoryDetail>스포츠</ItemCategoryDetail>
              </ItemDetailContainer>
              <ItemDetailContainer>
                <ItemCategory>개수</ItemCategory>
                <ItemCategoryDetail>1개</ItemCategoryDetail>
              </ItemDetailContainer>
              <ItemInfoContainer>아끼는 신발 입니다.</ItemInfoContainer>
            </ItemDetailInformationContainer>
          </Container>
          <Container>
            <AuctionTitleContainer>
              <SubHeader>경매글 제목</SubHeader>
              <AuctionTitle />
            </AuctionTitleContainer>

            <TextareaContainer>
              <SubHeader>경매글 내용</SubHeader>
              <AuctionText>어쩌구저쩌구</AuctionText>
            </TextareaContainer>

            <AuctionDetailInformationContainer>
              <SubHeader>경매 기간</SubHeader>
              <RadioContainer>
                <RadioLabel>
                  <Radio name="trade-type" value="All" />
                  하루
                </RadioLabel>
                <RadioLabel>
                  <Radio name="trade-type" value="meeting" />
                  일주일
                </RadioLabel>
              </RadioContainer>
            </AuctionDetailInformationContainer>

            <AuctionDetailInformationContainer>
              <SubHeader>거래 방법</SubHeader>
              <RadioContainer>
                <RadioLabel>
                  <Radio name="trade-type" value="All" /> 전체
                </RadioLabel>
                <RadioLabel>
                  <Radio name="trade-type" value="meeting" /> 직거래
                </RadioLabel>
                <RadioLabel>
                  <Radio name="trade-type" value="delivery" /> 택배
                </RadioLabel>
              </RadioContainer>
            </AuctionDetailInformationContainer>
            <Button>경매 발행하기</Button>
          </Container>
        </BigContainer>
      </TopContainer>
    </WrapContainer>
  );
};

export default NewAuction2;
