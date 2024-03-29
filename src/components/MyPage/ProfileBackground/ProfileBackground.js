import styled from 'styled-components';
import background from 'images/ProfileBackground.jpeg';
import { Container, UsernameText, CircleProfileImgContainer } from './styles';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { Button } from '@mui/material';
import { useWithdrawlMutation } from 'queries/auth';
import { Link } from 'react-router-dom';

const WithDrawlBtn = styled(Button)`
  && {
    position: absolute;
    right: 0;
    bottom: -4rem;
    background-color: #6315af;
    color: pink;
  }
`;

const EditBtn = styled(WithDrawlBtn)`
  && {
    right: 7rem;
  }
`;

const ProfileBackground = () => {
  const user = useRecoilValue(userAtom);
  const { mutate: withDrawlMutate } = useWithdrawlMutation();

  return (
    <Container>
      <img src={background} alt="" />
      <UsernameText>{user?.username}</UsernameText>
      <CircleProfileImgContainer>
        <img src={user?.avatar} alt="프로필 이미지"/>
      </CircleProfileImgContainer>
      {/*
      <WithDrawlBtn onClick={() => withDrawlMutate()} variant="contained">
        회원탈퇴
      </WithDrawlBtn>
      */}
      {/* <Link to="/mypage/infochange">
        <EditBtn variant="contained">회원정보 수정</EditBtn>
      </Link> */}
    </Container>
  );
};

export default ProfileBackground;
