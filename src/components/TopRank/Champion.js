import styled from 'styled-components';

const Container = styled.div`
  width: 35%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: yellow;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Profile = styled.div`
  width: 50%;
  height: 60%;
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

const Champion = () => {
  return (
    <Container>
      <Title>이달의 챔피언!</Title>
      <Profile />
      <UserName>유저네임</UserName>
    </Container>
  );
};

export default Champion;
