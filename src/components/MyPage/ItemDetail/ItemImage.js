import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const ArrowIconContainer = styled.div`
  width: 100%;
  height: 5vh;
  margin-bottom: 1rem;
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
  height: 13vh;
`;

const SubPic = styled(CardMedia)`
  width: 40%;
  height: 100%;
  margin-right: 1rem;
  border-radius: 1rem;
`;

const ItemImage = ({ singleItemData }) => {
  const { thumbnail, images } = singleItemData;
  return (
    <>
      <ArrowIconContainer>
        <Link to={'/mypage/'}>
          <ArrowIcon />
        </Link>
      </ArrowIconContainer>
      <MainPicContainer>
        {thumbnail && <MainPic image={thumbnail?.file} />}
      </MainPicContainer>
      <SubPicContainer>
        {images &&
          images.map((singleImg) => {
            if (!singleImg) return null;
            return <SubPic key={singleImg?.id} image={singleImg?.file} />;
          })}
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
