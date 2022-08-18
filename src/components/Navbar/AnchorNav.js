import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

const AnchorNav = ({ anchorElNav, closeNavMenu, openNavMenu }) => {
  const user = useRecoilValue(userAtom);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={closeNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuItem onClick={closeNavMenu}>
          <Link to="/">
            <Typography textAlign="center">소개페이지</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={closeNavMenu}>
          <Link to="/auction">
            <Typography textAlign="center">경매장</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={closeNavMenu}>
          <Link to="/toprank">
            <Typography textAlign="center">명예의 전당</Typography>
          </Link>
        </MenuItem>
        {!user && (
          <MenuItem onClick={closeNavMenu}>
            <Link to="/login">
              <Typography textAlign="center">로그인</Typography>
            </Link>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default AnchorNav;
