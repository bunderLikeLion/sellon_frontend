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
  width: 100%;
  height: 3.5rem;
  margin-top: 1rem;
  border-radius: 0.6rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCondition = styled.p`
  margin-left: 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 2rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemConditionDetail = styled(ItemDetail)`
  width: fit-content;
  padding: 0 1.5rem;
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
  border-radius: 0.6rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCategory = styled.p`
  margin-left: 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemQuantity = styled.p`
  margin-left: 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemDescriptionContainer = styled.div`
  width: 100%;
  height: 18rem;
  margin-top: 1rem;
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
  justify-content: center;
`;

const ItemInfoContainer = ({ singleItemData, isTriggeredFromModal }) => {
  const { name, quality, quantity, description, product_category } =
    singleItemData;
  return (
    <Container>
      <ItemDetailContainer>
        <ItemCondition>아이템 상태</ItemCondition>
        <ItemDetail>{statusHandler(quality)}</ItemDetail>
      </ItemDetailContainer>
      <ItemDetailContainer>
        <ItemCategory>카테고리</ItemCategory>
        <ItemDetail>
          <ItemConditionDetail>{product_category.name}</ItemConditionDetail>
        </ItemDetail>
      </ItemDetailContainer>
      <ItemDetailContainer>
        <ItemQuantity>개수</ItemQuantity>
        <ItemDetail>{quantity}</ItemDetail>
      </ItemDetailContainer>
      <ItemDescriptionContainer>
        <p>{description}</p>
      </ItemDescriptionContainer>
    </Container>
  );
};

export default ItemInfoContainer;
