import styled from 'styled-components';

const OnchatProfileContainor = styled.div`
  display: flex;
  height: 6rem;
  background: ${(props) => props.theme.color_background__secondary};
  position: relative;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 1rem;
  align-items: center;
`;

const OnchatProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: blue;
  margin: 1rem;
`;

const OnchatProfileNickname = styled.div`
  color: ${(props) => props.theme.color_font__secondary};
  font-size: 1.2rem;
  font-weight: bold;
`;

const OnChatUserProfile = () => {
  return (
    <OnchatProfileContainor>
      <OnchatProfileImg>UserImg</OnchatProfileImg>
      <OnchatProfileNickname>상대 닉네임</OnchatProfileNickname>
    </OnchatProfileContainor>
  );
};

export default OnChatUserProfile;
