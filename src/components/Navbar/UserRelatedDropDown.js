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

const UserDropDownContainertail = styled.div`

  background: blue;
  
`;

const UserDropDownContainer = styled(Menu)`
  & .MuiMenu-list {
    position: relative;
    width: 12rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme.color_font__primary};
    background: #33305b !important;
    display: inline-block;
  }

  .MuiMenu-list:after {
    content: '';
    display: block;
    position: absolute;
    border-bottom: 10px solid red;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    top:-6px;
    right: 1rem;
  }

  & .MuiPaper-root {
    border-radius: 0.5rem;
    background: #33305b;
  }
`;

const BorderBottom = styled.hr`
  width: 10rem;
  height: 0.1rem;
  color: #a3a3a3;
  background: #a3a3a3;
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
      <UserDropDownContainertail>
        <UserDropDownContainer
          sx={{ mt: '50px' }}
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
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton>
                <Avatar src="https://media.bunjang.co.kr/product/146279259_1_1613376940_w%7Bres%7D.jpg" />
              </IconButton>
              <Typography textAlign="center">{user?.username}</Typography>
            </Stack>
          </MenuItem>
          <BorderBottom />
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
                <Typography textAlign="center">진행중인 거래</Typography>
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
      </UserDropDownContainertail>
    </Box>
  );
};

export default UserRelatedDropDown;
