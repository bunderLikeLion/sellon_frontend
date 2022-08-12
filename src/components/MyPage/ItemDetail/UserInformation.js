import styled from 'styled-components';
import dateFormatter from 'utils/dateFormatter';
import { Avatar } from '@mui/material';

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15%;
`;

const ProfileImg = styled(Avatar)`
  height: 4rem !important;
  width: 4rem !important;
`;

const UserName = styled.div`
  margin: 0 1rem 0 1rem;
  font-size: 1.8rem;
`;

const UploadDate = styled.p`
  color: ${(props) => props.theme.color_font__tertiary};
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
        <UserName>{user?.username}</UserName>
        <UploadDate>{dateFormatter(created_at)}</UploadDate>
      </UserInfo>
    </>
  );
};
export default UserInformation;
