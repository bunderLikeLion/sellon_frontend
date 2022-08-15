import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CardMedia from '@mui/material/CardMedia';
import { Link, useParams } from 'react-router-dom';
import UserInformation from './UserInformation';
import { useSingleProductQuery } from 'queries/product';

const ArrowIconContainer = styled.div`
  width: 100%;
  height: 0.2rem;
  margin-bottom: 2rem;
`;

const ArrowIcon = styled(ArrowBackIosNewIcon)`
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;
`;

const MainPicContainer = styled.div`
  width: 100%;
  height: 17rem;
  margin-bottom: 2rem;
`;

const MainPic = styled(CardMedia)`
  width: 100%;
  height: 17rem;
  border-radius: 1rem;
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
  align-items: felx-start;
  flex-wrap: wrap;
  width: 100%;
  height: 28.3rem;
`;


const ItemImage = ({ singleItemData, isTriggeredFromModal }) => {
  const { thumbnail, images, id } = singleItemData;
  // const { id: itemId } = useParams();
  const { data: singleItem, isSuccess: singleItemFetched } =
    useSingleProductQuery(id);

  return (
    <>
      {!isTriggeredFromModal && (
        <ArrowIconContainer>
          <Link to={'/mypage/'}>
            <ArrowIcon />
          </Link>
        </ArrowIconContainer>
      )}
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
