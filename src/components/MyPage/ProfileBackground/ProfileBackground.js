import styled from 'styled-components';
import backgroundPic from 'images/profile_background.png';
import { Container, UsernameText, CircleProfileImgContainer } from './styles';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { Button } from '@mui/material';
import useWithdrawlMutation from 'queries/auth/useWithdrawlMutation';

const WithDrawlBtn = styled(Button)`
  && {
    position: absolute;
    right: 0;
    bottom: -3rem;
    background-color: #6315af;
    color: pink;
  }
`;

const ProfileBackground = () => {
  const user = useRecoilValue(userAtom);
  const { mutate: withDrawlMutate } = useWithdrawlMutation();

  return (
    <Container>
      <img src={backgroundPic} alt="" />
      <UsernameText>{user?.username}</UsernameText>
      <CircleProfileImgContainer />
      <WithDrawlBtn onClick={() => withDrawlMutate()} variant="contained">
        회원탈퇴
      </WithDrawlBtn>
    </Container>
  );
};

export default ProfileBackground;
