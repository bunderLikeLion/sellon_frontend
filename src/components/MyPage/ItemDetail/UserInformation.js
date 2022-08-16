import styled from 'styled-components';
import dateFormatter from 'utils/dateFormatter';
import { Avatar } from '@mui/material';

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 3rem;
  position: relative;
`;

const ProfileImg = styled(Avatar)`
  height: 2rem !important;
  width: 2rem !important;
`;

const UserName = styled.div`
  margin: 0 1rem;
  font-size: 1.2rem;
`;

const UploadDate = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color_font__tertiary};
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserInformation = ({ singleItemData }) => {
  const { user, created_at } = singleItemData;
  return (
    <>
      <UserInfo>
        <ProfileImg
          alt="Remy Sharp"
          src="https://media.bunjang.co.kr/product/146279259_1_1613376940_w%7Bres%7D.jpg"
        />
        <TextContainer>
          <UserName>{user?.username}</UserName>
          <UploadDate>{dateFormatter(created_at)}</UploadDate>
        </TextContainer>
      </UserInfo>
    </>
  );
};
export default UserInformation;
