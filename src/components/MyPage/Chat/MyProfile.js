import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import CardMedia from '@mui/material/CardMedia';

const MyProfileImg = styled(CardMedia)`
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 50%;
  background: #f00;
`;

const MyProfile = () => {
  const user = useRecoilValue(userAtom);

  // return <MyProfileImg image={user?.avatar}>Myprofile</MyProfileImg>;
  return <MyProfileImg>Myprofile</MyProfileImg>;
};

export default MyProfile;
