import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import styled from 'styled-components';

const Container = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: transparent !important;
`;

const ItemImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`;

const ItemImg = styled(CardMedia)`
  width: 90% !important;
  height: 100% !important;
  border-radius: 0.5rem;
  object-fit: cover !important;
  object-position: center;
`;

const ItemDurationContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  height: 9%;
  border-radius: 1rem;
  background: purple;
`;

const ItemDuration = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: white;
`;

const ItemContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 13%;
`;

const ItemName = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 350;
`;

const ItemDescriptionContainer = styled.div`
  width: 80%;
  overflow-y: scroll;
  max-height: 20rem;
`;

const ItemDescription = styled.p`
  color: #fff;
  line-height: 1.6rem;
  font-size: 1.3rem;
  font-weight: 200;
`;

const AuctionItem = () => {
  return (
    <Container sx={{ maxWidth: '100%' }}>
      <ItemImgContainer>
        <ItemImg
          component="img"
          image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904760_SMOK_1_300x300@2x.jpg?v=1656086629"
        />
        <ItemDurationContainer>
          <ItemDuration>D - 7</ItemDuration>
        </ItemDurationContainer>
      </ItemImgContainer>
      <ItemContentContainer>
        <ItemNameContainer>
          <ItemName>NIKE 신발 사세요!</ItemName>
        </ItemNameContainer>
        <ItemDescriptionContainer>
          <ItemDescription>
            이 신발은 영국에서 시작되어 되게 되게 잘 팔리는 핫한 잇템입니다.
            코드 적는 것보다 이런 데에 무슨 멘트 적는지 고민하는게 더
            오래걸리네요.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </ItemDescription>
        </ItemDescriptionContainer>
      </ItemContentContainer>
    </Container>
  );
};

export default AuctionItem;
