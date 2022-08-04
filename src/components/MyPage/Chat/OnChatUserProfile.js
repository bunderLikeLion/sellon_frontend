import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OnchatProfileContainor = styled.div`
  display: flex;
  height: 8rem;
  background: grey;
  position: relative;
  border-radius: 0.5rem;
  margin: 1rem;
  position: relative;
  padding: 1rem;
`;

const OnchatProfileImg = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: blue;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const OnchatProfileNickname = styled.div`
  margin-top: 1.5rem;
  color: black;
  font-size: 2rem;
`;

const StarIcon = styled(StarBorderIcon)`
  width: 0.7rem;
  height: 0.7rem;
  bottom: 0;
  position: absolute;
  bottom: 9%;
  right: 15%;
  margin-right: 0.5rem;
  color: yellow;
`;

const StarIconText = styled.div`
  position: absolute;
  bottom: 10%;
  right: 4%;
  font-size: 1.2rem;
`;

const OnChatUserProfile = () => {
  return (
    <OnchatProfileContainor>
      <OnchatProfileImg>UserImg</OnchatProfileImg>
      <OnchatProfileNickname>상대 아이디</OnchatProfileNickname>
      <StarIcon />
      <StarIconText>별점</StarIconText>
    </OnchatProfileContainor>
  );
};

export default OnChatUserProfile;
