import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const AnchorNav = ({ anchorElNav, closeUserMenu, openUserMenu }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openUserMenu}
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
        onClose={closeUserMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuItem onClick={closeUserMenu}>
          <Typography textAlign="center">소개페이지</Typography>
        </MenuItem>
        <MenuItem onClick={closeUserMenu}>
          <Typography textAlign="center">경매장</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AnchorNav;
