import styled from 'styled-components';
import statusHandler from 'utils/statusHandler';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

const EditButtonContainer = styled.div`
  position: relative;
  width: 90%;
  height: 5vh;
`;

const EditButton = styled.button`
  position: absolute;
  width: 5rem;
  height: 2rem;
  right: 0%;
  border: none;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_button_delete};
`;

const ItemTitle = styled.p`
  margin: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.color_font__frimary};
`;

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 77%;
  height: 8vh;
  margin-top: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCondition = styled.p`
  margin: 1.2rem;
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
  justify-content: space-evenly;
  align-items: center;
  width: 77%;
  height: 8vh;
  margin-top: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCategory = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategoryDetail = styled.div`
  width: 5rem;
  height: 2rem;
  padding-top: 0.5rem;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemDescriptionContainer = styled.div`
  width: 90%;
  height: 30vh;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  overflow-y: scroll;
  background: ${(props) => props.theme.color_background__primary};
  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
`;

const ItemInfoContainer = ({ singleItemData }) => {
  const { name, quality, quantity, description, product_category } =
    singleItemData;
  return (
    <>
      <EditButtonContainer>
        <EditButton>수정하기</EditButton>
      </EditButtonContainer>
      <ItemTitle>{name}</ItemTitle>
      <ItemDetailContainer>
        <ItemCondition>아이템 상태</ItemCondition>
        <ItemConditionDetail>{statusHandler(quality)}</ItemConditionDetail>
      </ItemDetailContainer>
      <ItemCategoryContainer>
        <ItemCategory>카테고리</ItemCategory>
        <ItemCategoryDetail>{product_category.name}</ItemCategoryDetail>
      </ItemCategoryContainer>
      <ItemCategoryContainer>
        <ItemCategory>개수</ItemCategory>
        <ItemCategoryDetail>{quantity}</ItemCategoryDetail>
      </ItemCategoryContainer>
      <ItemDescriptionContainer>
        <Viewer initialValue={description} />
      </ItemDescriptionContainer>
    </>
  );
};

export default ItemInfoContainer;
