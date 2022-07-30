import backgroundPic from 'images/profile_background.png';
import { Container, UsernameText, CircleProfileImgContainer } from './styles';

const ProfileBackground = () => {
  const user = JSON.parse(localStorage.getItem('user_info'));

  return (
    <Container>
      <img src={backgroundPic} alt="" />
      <UsernameText>{user.username}</UsernameText>
      <CircleProfileImgContainer />
    </Container>
  );
};

export default ProfileBackground;
