import styled from 'styled-components';
import ChangeItemId from 'components/MyPage/ItemInfoChange/ChangeItemId';
import ChangeItemImage from 'components/MyPage/ItemInfoChange/ChangeItemImage';
import ChangeItemExtraImage from 'components/MyPage/ItemInfoChange/ChangeItemExtraImage';
import ChangeItemStatus from 'components/MyPage/ItemInfoChange/ChangeItemStatus';
import ChangeItemCategory from 'components/MyPage/ItemInfoChange/ChangeItemCategory';
import ChangeItemTextarea from 'components/MyPage/ItemInfoChange/ChangeItemTextarea';
import { queryClient } from 'index';
import { useParams } from 'react-router-dom';
import { useEditProductMutation, useSingleProductQuery } from 'queries/product';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 90vh;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 60rem;
  height: fit-content;
  padding-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;

const EntireContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  padding: 1rem;
`;

const GuideContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 65%;
  height: 4rem;
  margin-bottom: 0.5rem;
`;

const Guide = styled.h1`
  font-size: 1.7rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const ItemInfoChange = () => {
  const { id } = useParams();
  const { data: itemData } = useSingleProductQuery(id);
  const { mutate: editSingleField } = useEditProductMutation(id);

  return (
    <Container>
      {itemData && (
        <Card>
          <EntireContainer>
            <GuideContainer>
              <Guide>아이템 정보 수정</Guide>
            </GuideContainer>
            <ChangeItemId
              givenName={itemData?.name}
              editSingleField={editSingleField}
            />
            <ChangeItemImage
              givenThumbnail={itemData?.thumbnail}
              editSingleField={editSingleField}
            />
            <ChangeItemExtraImage
              givenExtraImages={itemData?.images}
              editSingleField={editSingleField}
            />
            <ChangeItemStatus
              givenQuality={itemData?.quality}
              editSingleField={editSingleField}
            />
            <ChangeItemCategory
              givenCategory={itemData?.product_category}
              editSingleField={editSingleField}
            />
            <ChangeItemTextarea
              givenDesc={itemData?.description}
              editSingleField={editSingleField}
            />
          </EntireContainer>
        </Card>
      )}
    </Container>
  );
};

export default ItemInfoChange;
