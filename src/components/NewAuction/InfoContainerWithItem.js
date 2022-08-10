import styled from 'styled-components';
import statusHandler from 'utils/statusHandler';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ItemImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  clear: both;
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

const ItemExtraImageContainer = styled.div`
  height: 8rem;
  margin-top: 1rem;
  float: left;
  clear: both;
  display: flex;
  justify-content: flex-start;
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

const ItemDetailInformationContainer = styled.div`
  margin: 1rem;
  height: 100%;
`;

const ItemTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem;
`;

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

const InfoContainerWithItem = ({ selectedItem }) => {
  return (
    <Container>
      <ItemImageContainer>
        <ItemImage imgUrl={selectedItem?.thumbnail?.file} />
        <ItemExtraImageContainer>
          {selectedItem.images.map((singleImg) => {
            return (
              <ItemExtraImage key={singleImg.id} imgUrl={singleImg?.file} />
            );
          })}
        </ItemExtraImageContainer>
      </ItemImageContainer>

      <ItemDetailInformationContainer>
        <ItemTitle>{selectedItem?.name}</ItemTitle>
        <ItemDetailContainer>
          <ItemCondition>아이템 상태</ItemCondition>
          <ItemConditionDetail>
            {statusHandler(selectedItem?.quality)}
          </ItemConditionDetail>
        </ItemDetailContainer>
        <ItemDetailContainer>
          <ItemCategory>카테고리</ItemCategory>
          <ItemCategoryDetail>
            {selectedItem?.product_category?.name}
          </ItemCategoryDetail>
        </ItemDetailContainer>
        <ItemDetailContainer>
          <ItemCategory>개수</ItemCategory>
          <ItemCategoryDetail>{selectedItem?.quantity}개</ItemCategoryDetail>
        </ItemDetailContainer>
        <ItemInfoContainer>{selectedItem?.description}</ItemInfoContainer>
      </ItemDetailInformationContainer>
    </Container>
  );
};

export default InfoContainerWithItem;
