import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ArrowIconContainer = styled.div`
  width: 100%;
  height: 10%;
  margin: 1rem 0 0.3rem 0;
`;

const ArrowIcon = styled(ArrowBackIosNewIcon)`
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 1rem;
`;

const MainPicContainer = styled.div`
  width: 100%;
  height: 15rem;
`;

const MainPic = styled.div`
  height: 100%;
  border-radius: 1rem;
  background-image: url(https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165474316294015711.jpg?gif=1&w=1280&h=1280&c=c&webp=1);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SubPicContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25%;
`;

const SubPic = styled.div`
  width: 40%;
  height: 75%;
  background: white;
  border-radius: 1rem;
  margin-right: 1rem;
  background-image: url(https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165474316294015711.jpg?gif=1&w=1280&h=1280&c=c&webp=1);
  background-position: center;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
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

const Left_Component = () => {
  return (
    <>
      <ArrowIconContainer>
        <ArrowIcon />
      </ArrowIconContainer>
      <MainPicContainer>
        <MainPic imgUrl="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165474316294015711.jpg?gif=1&w=1280&h=1280&c=c&webp=1" />
      </MainPicContainer>
      <SubPicContainer>
        <SubPic />
        <SubPic />
      </SubPicContainer>
      <UserInfo>
        <UserPic />
        <UserName>허유라</UserName>
        <UploadDate>2022.08.05</UploadDate>
      </UserInfo>
    </>
  );
};

export default Left_Component;
