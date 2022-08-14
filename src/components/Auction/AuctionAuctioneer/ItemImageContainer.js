import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  clear: both;
  width: 50%;
  height: 24rem;
  margin: auto 0;
  padding: 1rem;
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

const ItemExtraImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  float: left;
  height: 8rem;
  margin-top: 1rem;
  clear: both;
`;

const ItemImageContainer = ({ thumbnail, images }) => {
  return (
    <Container>
      <ItemImage imgUrl={thumbnail} />
      <ItemExtraImageContainer>
        {images &&
          images.map((singleImg) => {
            return <ItemExtraImage imgUrl={singleImg?.file} />;
          })}
      </ItemExtraImageContainer>
    </Container>
  );
};

export default ItemImageContainer;
