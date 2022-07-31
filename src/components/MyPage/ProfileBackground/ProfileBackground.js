import backgroundPic from 'images/profile_background.png';
import { Container, UsernameText, CircleProfileImgContainer } from './styles';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

const ProfileBackground = () => {
  const user = useRecoilValue(userAtom);

  return (
    <Container>
      <img src={backgroundPic} alt="" />
      <UsernameText>{user.username}</UsernameText>
      <CircleProfileImgContainer />
    </Container>
  );
};

export default ProfileBackground;
