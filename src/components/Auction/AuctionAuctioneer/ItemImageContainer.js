import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 20rem;
  clear: both;
  margin: auto 0;
  padding: 1rem;
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

const ItemExtraImageContainer = styled.div`
  height: 8rem;
  margin-top: 1rem;
  float: left;
  clear: both;
  display: flex;
  justify-content: flex-start;
`;

const ItemImageContainer = () => {
  return (
    <Container>
      <ItemImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
      <ItemExtraImageContainer>
        <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
        <ItemExtraImage imgUrl="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580" />
      </ItemExtraImageContainer>
    </Container>
  );
};

export default ItemImageContainer;
