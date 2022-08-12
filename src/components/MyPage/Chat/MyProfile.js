import styled from 'styled-components';

const MyProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 50%;
  background: #f00;
`;

const MyProfile = () => {
  return <MyProfileImg>Myprofile</MyProfileImg>;
};

export default MyProfile;
