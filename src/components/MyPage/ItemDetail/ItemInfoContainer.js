import styled from 'styled-components';
import statusHandler from 'utils/statusHandler';

const EditButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5vh;
  margin-bottom: 2rem;
`;

const EditButton = styled.button`
  position: absolute;
  right: 0;
  width: 7rem;
  height: 2.3rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_button__modify};
  :hover {
    //transition: 0.3s;
    //transform: translateY(-0.2rem);
    border: 1px solid ${(props) => props.theme.color_border__topleft};
  }
`;

const ItemTitle = styled.p`
  margin: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color_font__primary};
`;

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 3.5rem;
  margin-top: 1rem;
  padding-right: 2rem;
  border-radius: 0.6rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCondition = styled.p`
  margin: 0 3rem 0 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemDetail = styled.div`
  width: 5rem;
  height: 2rem;
  padding-top: 0.5rem;
  font-size: 1rem;
  text-align: left;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemConditionDetail = styled(ItemDetail)`
  border-radius: 0.8rem;
  text-align: center;
  background: ${(props) => props.theme.color_background__success};
`;

const ItemCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 3.5rem;
  margin-top: 1rem;
  padding-right: 2rem;
  border-radius: 0.6rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCategory = styled.p`
  margin: 0 4.3rem 0 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemQuantity = styled.p`
  margin: 0 6.4rem 0 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemDescriptionContainer = styled.div`
  width: 100%;
  height: 14.8rem;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  overflow-y: scroll;
  background: ${(props) => props.theme.color_background__primary};
  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemInfoContainer = ({ singleItemData, isTriggeredFromModal }) => {
  const { name, quality, quantity, description, product_category } =
    singleItemData;
  return (
    <Container>
      {!isTriggeredFromModal && (
        <EditButtonContainer>
          <EditButton>수정하기</EditButton>
        </EditButtonContainer>
      )}
      <ItemTitle>{name}</ItemTitle>
      <ItemDetailContainer>
        <ItemCondition>아이템 상태</ItemCondition>
        <ItemDetail>{statusHandler(quality)}</ItemDetail>
      </ItemDetailContainer>
      <ItemCategoryContainer>
        <ItemCategory>카테고리</ItemCategory>
        <ItemConditionDetail>{product_category.name}</ItemConditionDetail>
      </ItemCategoryContainer>
      <ItemCategoryContainer>
        <ItemQuantity>개수</ItemQuantity>
        <ItemDetail>{quantity}</ItemDetail>
      </ItemCategoryContainer>
      <ItemDescriptionContainer>
        <textarea value={description} />
      </ItemDescriptionContainer>
    </Container>
  );
};

export default ItemInfoContainer;
