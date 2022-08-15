import styled from 'styled-components';

const OnChatProfileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: ${(props) => props.theme.color_background__secondary};
`;

const OnChatProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 50%;
  background: #0f0;
`;

const OnChatProfileNickname = styled.div`
  color: ${(props) => props.theme.color_font__secondary};
  font-size: 1.2rem;
  font-weight: bold;
`;

const OnChatUserProfile = ({ opponent }) => {
  return (
    <OnChatProfileContainer>
      <OnChatProfileImg>UserImg</OnChatProfileImg>
      <OnChatProfileNickname>{opponent?.username}</OnChatProfileNickname>
    </OnChatProfileContainer>
  );
};

export default OnChatUserProfile;
