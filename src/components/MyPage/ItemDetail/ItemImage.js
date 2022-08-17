import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CardMedia from '@mui/material/CardMedia';
import { Link, useParams } from 'react-router-dom';
import UserInformation from './UserInformation';
import { useSingleProductQuery } from 'queries/product';

const MainPicContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

const MainPic = styled(CardMedia)`
  width: 100%;
  height: 15rem;
  border-radius: 1rem;

  @media screen and (max-width: 1300px) {
    height: 23rem;
  }

  @media screen and (max-width: 1000px) {
    height: 20rem;
  }
`;

const SubPicContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 9rem;
`;

const SubPic = styled(CardMedia)`
  width: 9rem;
  height: 9rem;
  margin-right: 1rem;
  border-radius: 1rem;
`;

const ItemPicWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const ItemImage = ({ singleItemData, isTriggeredFromModal }) => {
  const { thumbnail, images, id } = singleItemData;
  const { data: singleItem, isSuccess: singleItemFetched } =
    useSingleProductQuery(id);

  return (
    <>
      {singleItemFetched && <UserInformation singleItemData={singleItem} />}
      <ItemPicWrapper>
        <MainPicContainer>
          {/*모달에서 가장 큰 상품 이미지*/}
          {thumbnail && <MainPic image={thumbnail?.file} />}
        </MainPicContainer>
        <SubPicContainer>
          {/*상품 이미지 큰 거 아래 작은 sub 상품 이미지*/}
          {images &&
            images.map((singleImg) => {
              if (!singleImg) return null;
              return <SubPic key={singleImg?.id} image={singleImg?.file} />;
            })}
        </SubPicContainer>
      </ItemPicWrapper>
    </>
  );
};

export default ItemImage;
