import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userAtom } from 'states';
import { Stack } from '@mui/material';
import styled from 'styled-components';

const UserDropDownContainer = styled(Menu)`
  & .MuiMenu-list {
    background: ${(props) => props.theme.color_background__default} !important;
    color: #fff;
  }
`;

const UserRelatedDropDown = ({ openUserMenu, closeUserMenu, anchorElUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);

  const logout = () => {
    toast.success('로그아웃 성공 👍');
    setUser(() => null);
    localStorage.clear();
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={openUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://media.bunjang.co.kr/product/146279259_1_1613376940_w%7Bres%7D.jpg"
          />
        </IconButton>
      </Tooltip>
      <UserDropDownContainer
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={closeUserMenu}
      >
        <MenuItem onClick={closeUserMenu}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            borderBottom={1}
          >
            <IconButton>
              <Avatar src="https://media.bunjang.co.kr/product/146279259_1_1613376940_w%7Bres%7D.jpg" />
            </IconButton>
            <Typography textAlign="center">{user?.username}</Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={closeUserMenu}>
          <Link to="/mypage">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <PersonIcon />
              <Typography textAlign="center">마이페이지</Typography>
            </Stack>
          </Link>
        </MenuItem>
        <MenuItem onClick={closeUserMenu}>
          <Link to="/chat">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <MailIcon />
              <Typography textAlign="center">쪽지함</Typography>
            </Stack>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            closeUserMenu();
            logout();
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            color="#FF4E4E"
          >
            <LogoutIcon />
            <Typography textAlign="center">로그아웃</Typography>
          </Stack>
        </MenuItem>
      </UserDropDownContainer>
    </Box>
  );
};

export default UserRelatedDropDown;
