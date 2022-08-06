import styled from 'styled-components';
import statusHandler from 'utils/statusHandler';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Viewer } from '@toast-ui/react-editor';

const EditButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = styled.button`
  width: 5rem;
  height: 2rem;
  background: ${(props) => props.theme.color_button_delete};
  border: none;
  border-radius: 0.5rem;
  right: 15%;
  position: absolute;
`;

const ItemTitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
`;

const ItemTitle = styled.div`
  font-size: 2rem;
  position: absolute;
  margin: 1rem;
  color: ${(props) => props.theme.color_font__frimary};
`;

const ItemDetailContainer = styled.div`
  width: 70%;
  height: 10%;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCondition = styled.p`
  font-size: 1.2rem;
  margin: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemConditionDetail = styled.div`
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__secondary};
  font-size: 1rem;
  width: 5rem;
  height: 2rem;
  margin: 1rem 2rem;
  padding-top: 0.5rem;
  text-align: center;
  border-radius: 0.8rem;
`;

const ItemCategoryContainer = styled.div`
  background: ${(props) => props.theme.color_background__primary};
  width: 70%;
  height: 10%;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const ItemCategory = styled.p`
  font-size: 1.2rem;
  margin: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategoryDetail = styled.div`
  font-size: 0.8rem;
  width: 5rem;
  height: 2rem;
  margin: 1rem 2rem;
  padding-top: 0.5rem;
  text-align: center;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemInfoContainer = styled.div`
  width: 90%;
  height: 50%;
  margin-top: 2rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
  overflow-y: scroll;

  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
`;

const ItemInfo = styled.p`
  padding: 2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const Right_Component = ({ singleItemData }) => {
  const { name, quality, quantity, description, product_category } =
    singleItemData;
  return (
    <>
      <EditButtonContainer>
        <EditButton>수정하기</EditButton>
      </EditButtonContainer>
      <ItemTitleContainer>
        <ItemTitle>{name}</ItemTitle>
      </ItemTitleContainer>
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
      <ItemInfoContainer>
        <Viewer initialValue={description} />
      </ItemInfoContainer>
    </>
  );
};

export default Right_Component;
