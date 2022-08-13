import styled from 'styled-components';
import statusHandler from 'utils/statusHandler';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

const EditButtonContainer = styled.div`
  position: relative;
  width: 90%;
  height: 5vh;
  margin-bottom: 2rem;
`;

const EditButton = styled.button`
  position: absolute;
  right: 0;
  width: 7rem;
  height: 2.3rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_button__delete};
  :hover {
    transition: 0.3s;
    transform: translateY(-0.2rem);
    border: 1px solid ${(props) => props.theme.color_border__topleft};
  }
`;

const ItemTitle = styled.p`
  margin: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 77%;
  height: 3.5rem;
  margin-top: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCondition = styled.p`
  margin: 0 3rem 0 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemConditionDetail = styled.div`
  width: 5rem;
  height: 2rem;
  padding-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 77%;
  height: 3.5rem;
  margin-top: 1rem;
  border-radius: 1rem;
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
  width: 90%;
  @media (min-height: 300px) and (max-height: 800px) {
    height: 40%;
  }
  @media (min-height: 800px) and (max-height: 1000px) {
    height: 45%;
  }
  @media (min-height: 1000px) and (max-height: 1200px) {
    height: 50%;
  }
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  overflow-y: scroll;
  background: ${(props) => props.theme.color_background__primary};
  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
`;

const ItemInfoContainer = ({ singleItemData, isTriggeredFromModal }) => {
  const { name, quality, quantity, description, product_category } =
    singleItemData;
  return (
    <>
      {!isTriggeredFromModal && (
        <EditButtonContainer>
          <EditButton>수정하기</EditButton>
        </EditButtonContainer>
      )}
      <ItemTitle>{name}</ItemTitle>
      <ItemDetailContainer>
        <ItemCondition>아이템 상태</ItemCondition>
        <ItemConditionDetail>{statusHandler(quality)}</ItemConditionDetail>
      </ItemDetailContainer>
      <ItemCategoryContainer>
        <ItemCategory>카테고리</ItemCategory>
        <ItemConditionDetail>{product_category.name}</ItemConditionDetail>
      </ItemCategoryContainer>
      <ItemCategoryContainer>
        <ItemQuantity>개수</ItemQuantity>
        <ItemConditionDetail>{quantity}</ItemConditionDetail>
      </ItemCategoryContainer>
      <ItemDescriptionContainer>
        <Viewer initialValue={description} />
      </ItemDescriptionContainer>
    </>
  );
};

export default ItemInfoContainer;
