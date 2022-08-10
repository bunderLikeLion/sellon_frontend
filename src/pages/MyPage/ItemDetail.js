import styled from 'styled-components';
import Left_Component from 'components/MyPage/ItemDetail/Left_Component';
import Right_Component from 'components/MyPage/ItemDetail/Right_Component';
import { useParams } from 'react-router-dom';
import useSingleProductQuery from 'queries/product/useSingleProductQuery';
import WrapContainer from 'layouts/WrapContainer';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 35rem;
  padding-top: 0.5rem;
  color: ${(props) => props.theme.color_white};
`;

const ItemDetail_Left = styled.div`
  width: 60%;
  padding: 0 5rem 0 5rem;
`;

const ItemDetail_Right = styled.div`
  width: 45%;
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
          <ItemDetail_Left>
            {singleItemFetched && (
              <Left_Component singleItemData={singleItem} />
            )}
          </ItemDetail_Left>
          <ItemDetail_Right>
            {singleItemFetched && (
              <Right_Component singleItemData={singleItem} />
            )}
          </ItemDetail_Right>
        </Container>
      </WrapContainer>
    </>
  );
};

export default ItemDetail;
