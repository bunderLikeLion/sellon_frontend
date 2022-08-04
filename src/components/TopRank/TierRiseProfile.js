import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 70%;
`;

const Profile = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background: black;
`;

const UserName = styled.h1`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
`;

const TierRiseProfile = () => {
  return (
    <Container>
      <Profile />
      <UserName>유저네임</UserName>
    </Container>
  );
};

export default TierRiseProfile;
