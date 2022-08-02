import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  height: fit-content;
  margin: 3rem auto;
  padding: 2rem 1rem;
  background-color: #121212;
  color: white;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Button = styled.button`
  float: right;
  margin: 0.5rem;
  border: none;
  background-color: white;
`;

const ItemImage = styled.div`
  width: 70%;
  height: 100%;
  float: left;
  margin: 0 auto;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemExtraImage = styled.div`
  width: 20%;
  margin: 1rem;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemImageContainer = styled.div`
  float: left;
  clear: both;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 15rem;
`;

const ItemExtraImageContainer = styled.div`
  height: 8rem;
  float: left;
  clear: both;
  display: flex;
  justify-content: center;
`;

const ItemDetailInformationContainer = styled.div`
  width: 50%;
  float: right;
  margin: 1rem auto;
  padding: 1rem;
  padding-right: 0;
`;

const ItemDetailTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ItemDetailInformation = styled.div`
  background-color: grey;
  padding: 1rem;
`;

const ItemDetailText = styled.div`
  background-color: grey;
  min-height: 10rem;
  clear: both;
  padding: 1rem;
`;

const ItemDetail = () => {
  return (
    <Container>
      <Button type="submit">수정하기</Button>
      <Button type="submit">삭제하기</Button>

      <ItemContainer>
        <ItemImageContainer>
          <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
          <ItemExtraImageContainer>
            <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
            <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
          </ItemExtraImageContainer>
        </ItemImageContainer>

        <ItemDetailInformationContainer>
          <ItemDetailTitle>나이키 덩크 로우</ItemDetailTitle>
          <ItemDetailInformation>
            <p>개수 : 1개</p>
            <p>상태 : 좋음</p>
            <p>카테고리 : 스포츠</p>
          </ItemDetailInformation>
        </ItemDetailInformationContainer>
        <ItemDetailText>아끼는 신발 입니다.</ItemDetailText>
      </ItemContainer>
    </Container>
  );
};

export default ItemDetail;
