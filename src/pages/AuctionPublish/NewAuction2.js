import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';

const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 15rem auto;
  padding: 2rem 1rem;
  color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const BigContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem;
  position: relative;
`;

const BigText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 2rem;
`;

const Button = styled.button`
  margin: 4rem 1rem 1rem 1rem;
  background: ${(props) => props.theme.color_background__success};
  color: white;
  border-radius: 1rem;
  height: 3.5rem;
  width: 9rem;
  float: right;
  font-size: 1rem;
  font-weight: 700;
  border: none;
`;

const ItemImage = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  border-radius: 1rem;
  margin: 0 auto;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemExtraImage = styled.div`
  width: 40%;
  margin-right: 1rem;
  border-radius: 1rem;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  clear: both;
  padding: 1rem;
`;

const ItemExtraImageContainer = styled.div`
  height: 8rem;
  margin-top: 1rem;
  float: left;
  clear: both;
  display: flex;
  justify-content: flex-start;
`;

const ItemDetailInformationContainer = styled.div`
  margin: 1rem;
  height: 100%;
`;

const ItemTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ItemCondition = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemConditionDetail = styled.div`
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__secondary};
  font-size: 1rem;
  width: 5rem;
  height: 1.5rem;
  line-height: normal;
  margin: 1rem 2rem;
  text-align: center;
  border-radius: 0.8rem;
`;

const ItemCategory = styled.p`
  font-weight: 700;
  font-size: 1rem;
  margin: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategoryDetail = styled.div`
  font-size: 1rem;
  width: 5rem;
  margin: 1rem 2rem;
  text-align: center;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemInfoContainer = styled.div`
  width: 100%;
  height: 14rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_font__secondary};
  overflow-y: scroll;

  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
`;

const SubHeader = styled.p`
  width: 6rem;
  margin: 0.5rem;
  margin-left: 0;
  font-weight: 700;
  font-size: 1rem;
`;

const AuctionTitleContainer = styled.div`
  clear: both;
  margin: 2rem 1rem;
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

const AuctionDetailInformationContainer = styled.div`
  background: ${(props) => props.theme.color_background__primary};
  display: flex;
  margin: 1rem;
  padding: 1rem 2rem;
  align-items: center;
  border-radius: 1rem;
  height: 4.5rem;
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
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
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
