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
  height: 23rem;
  padding: 1rem 1rem 0 1rem;
  clear: both;
`;

const ItemImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemExtraImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 8rem;
  clear: both;
  margin-top: 1rem;
`;

const ItemExtraImage = styled.div`
  width: 40%;
  height: 100%;
  margin-right: 1rem;
  border-radius: 1rem;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemDetailInformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  height: 100%;
`;

const ItemTitle = styled.p`
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const ItemQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  width: 19%;
  height: 2.5rem;
  margin-left: 18.3rem;
  padding: 0 1rem;
  border-radius: 1rem;
`;

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemConditionCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ItemCondition = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemConditionDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 2rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  background: ${(props) => props.theme.color_button__ok};
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategory = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategoryDetail = styled.div`
  width: 2rem;
  margin: 1rem;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemInfoContainer = styled.div`
  width: 100%;
  height: 7rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  overflow-y: scroll;
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_font__secondary};

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
        <ItemQuantityContainer>
          <ItemCategoryDetail>{selectedItem?.quantity}개</ItemCategoryDetail>
        </ItemQuantityContainer>
        <ItemConditionCategoryContainer>
          <ItemDetailContainer>
            <ItemCondition>상태</ItemCondition>
            <ItemConditionDetail>
              {statusHandler(selectedItem?.quality)}
            </ItemConditionDetail>
          </ItemDetailContainer>
          <ItemDetailContainer>
            <ItemCategory>카테고리</ItemCategory>
            <ItemConditionDetail>
              {selectedItem?.product_category?.name}
            </ItemConditionDetail>
          </ItemDetailContainer>
        </ItemConditionCategoryContainer>

        <ItemInfoContainer>{selectedItem?.description}</ItemInfoContainer>
      </ItemDetailInformationContainer>
    </Container>
  );
};

export default InfoContainerWithItem;
