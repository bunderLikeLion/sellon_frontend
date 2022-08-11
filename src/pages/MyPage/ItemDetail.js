import styled from 'styled-components';
import ItemImage from 'components/MyPage/ItemDetail/ItemImage';
import ItemInfoContainer from 'components/MyPage/ItemDetail/ItemInfoContainer';
import UserInformation from 'components/MyPage/ItemDetail/UserInformation';
import { useParams } from 'react-router-dom';
import { useSingleProductQuery } from 'queries/product';
import WrapContainer from 'layouts/WrapContainer';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
  margin: 2rem;
  padding-top: 0.5rem;
  color: ${(props) => props.theme.color_white};
`;

const LeftContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 5rem 0 5rem;
`;

const RightContainer = styled.div`
  width: 40%;
  height: 100%;
`;

const ItemDetail = () => {
  const { id: itemId } = useParams();
  const { data: singleItem, isSuccess: singleItemFetched } =
    useSingleProductQuery(itemId);

  return (
    <>
      <WrapContainer>
        <Container>
          <LeftContainer>
            {singleItemFetched && <ItemImage singleItemData={singleItem} />}
            {singleItemFetched && (
              <UserInformation singleItemData={singleItem} />
            )}
          </LeftContainer>
          <RightContainer>
            {singleItemFetched && (
              <ItemInfoContainer singleItemData={singleItem} />
            )}
          </RightContainer>
        </Container>
      </WrapContainer>
    </>
  );
};

export default ItemDetail;
