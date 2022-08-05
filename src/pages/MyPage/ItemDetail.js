import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import Left_Component from 'components/MyPage/ItemDetail/Left_Component';
import Right_Component from 'components/MyPage/ItemDetail/Right_Component';

const Container = styled.div`
  width: 100%;
  height: 35rem;
  color: white;
  display: flex;
  overflow: hidden;
  padding-top: 0.5rem;
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
  return (
    <WrapContainer>
      <Container>
        <ItemDetail_Left>
          <Left_Component />
        </ItemDetail_Left>
        <ItemDetail_Right>
          <Right_Component />
        </ItemDetail_Right>
      </Container>
    </WrapContainer>
  );
};

export default ItemDetail;
