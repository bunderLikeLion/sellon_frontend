import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CardMedia from '@mui/material/CardMedia';
import dateFormatter from 'utils/dateFormatter';

const ArrowIconContainer = styled.div`
  width: 100%;
  height: 10%;
  margin: 1rem 0 0.3rem 0;
`;

const ArrowIcon = styled(ArrowBackIosNewIcon)`
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const MainPicContainer = styled.div`
  width: 100%;
  height: 15rem;
`;

const MainPic = styled(CardMedia)`
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
  height: 75%;
  border-radius: 1rem;
  margin-right: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
`;

const UserPic = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://s3.orbi.kr/data/file/united2/8d45fd407a3344b9b7457538ec64e0f8.jpg);
`;

const UserName = styled.div`
  margin-right: 1rem;
`;

const UploadDate = styled.p`
  color: ${(props) => props.theme.color_font__tertiary};
`;

const Left_Component = ({ user, thumbnail, images, date }) => {
  return (
    <>
      <ArrowIconContainer>
        <ArrowIcon />
      </ArrowIconContainer>
      <MainPicContainer>
        <MainPic image={thumbnail?.file} />
      </MainPicContainer>
      <SubPicContainer>
        {images.map((singleImg) => {
          return <SubPic key={singleImg?.id} image={singleImg?.file} />;
        })}
      </SubPicContainer>
      <UserInfo>
        <UserPic />
        <UserName>{user?.username}</UserName>
        <UploadDate>{dateFormatter(date)}</UploadDate>
      </UserInfo>
    </>
  );
};

export default Left_Component;
