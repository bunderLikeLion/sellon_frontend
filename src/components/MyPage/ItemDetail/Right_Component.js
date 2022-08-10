import styled from 'styled-components';
import statusHandler from 'utils/statusHandler';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

const EditButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const EditButton = styled.button`
  position: absolute;
  right: 15%;
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_button__delete};
`;

const ItemTitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
`;

const ItemTitle = styled.div`
  position: absolute;
  margin: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 10%;
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
  text-align: center;
  width: 5rem;
  height: 2rem;
  margin: 1rem 2rem;
  padding-top: 0.5rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 10%;
  margin-top: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ItemCategory = styled.p`
  margin: 1.2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemCategoryDetail = styled.div`
  text-align: center;
  width: 5rem;
  height: 2rem;
  margin: 1rem 2rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemInfoContainer = styled.div`
  width: 90%;
  height: 50%;
  margin-top: 2rem;
  padding: 0.5rem;
  border-radius: 1rem;
  overflow-y: scroll;
  background: ${(props) => props.theme.color_background__primary};
  .toastui-editor-contents p {
    color: ${(props) => props.theme.color_white};
  }
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
