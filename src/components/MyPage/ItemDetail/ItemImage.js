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
  height: 35vh;
  margin-bottom: 2rem;
`;

const MainPic = styled(CardMedia)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

const SubPicContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25%;
`;

const SubPic = styled(CardMedia)`
  width: 40%;
  height: 100%;
  margin-right: 1rem;
  border-radius: 1rem;
`;

const ItemImage = ({ singleItemData, isTriggeredFromModal }) => {
  const { thumbnail, images } = singleItemData;
  const { id: itemId } = useParams();
  const { data: singleItem, isSuccess: singleItemFetched } =
    useSingleProductQuery(itemId);

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
      <MainPicContainer>
        {thumbnail && <MainPic image={thumbnail?.file} />}
      </MainPicContainer>
      <SubPicContainer>
        {images &&
          images.map((singleImg) => {
            if (!singleImg) return null;
            return <SubPic key={singleImg?.id} image={singleImg?.file} />;
          })}
      </SubPicContainer>
    </>
  );
};

export default ItemImage;
