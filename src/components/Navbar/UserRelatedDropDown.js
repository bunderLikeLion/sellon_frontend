import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtom } from 'states';
import axiosInstance from 'apis/config';

const UserRelatedDropDown = ({ openUserMenu, closeUserMenu, anchorElUser }) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const logout = () => {
    toast.success('로그아웃 성공 👍');
    setUser(() => null);
    localStorage.clear();
    axiosInstance.defaults.headers.common['Authorization'] = null;
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={openUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
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
          <Link to="/mypage">
            <Typography textAlign="center">My Page</Typography>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            closeUserMenu();
            logout();
          }}
        >
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
        <MenuItem onClick={closeUserMenu}>
          <Link to="/chat">
            <Typography textAlign="center">쪽지함</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserRelatedDropDown;
