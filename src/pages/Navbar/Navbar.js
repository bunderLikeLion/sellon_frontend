import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { AnchorNav, UserRelatedDropDown } from 'components/Navbar';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

const Navbar = styled(AppBar)`
  background: ${(props) => props.theme.color_background__primary} !important;
`;

const LinkText = styled(Link)`
  transition: 0.2s;
  background-color: transparent !important;;
  :hover {
    color: ${(props) => props.theme.color_border__hover__light} !important;
  }
`;

const LinkButton = styled(Button)`
  background-color: transparent !important;;
  transition: 0.2s !important;
  :hover {
    color: ${(props) => props.theme.color_border__hover__light} !important;
  }
`;

const ResponsiveAppBar = () => {
  const user = useRecoilValue(userAtom);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Navbar position="static" sx={{ height: '4rem', justifyContent: 'center' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Link>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SELLON
            </Typography>
          </Link>
          <AnchorNav
            anchorElNav={anchorElNav}
            openNavMenu={handleOpenNavMenu}
            closeNavMenu={handleCloseNavMenu}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LinkText to="/">SELLON</LinkText>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-evenly',
            }}
          >
            <Link to="/">
              <LinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                기능소개
              </LinkButton>
            </Link>
            <LinkText to="/auction">
              <LinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                경매장
              </LinkButton>
            </LinkText>
            <LinkText to="/toprank">
              <LinkButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                명예의 전당
              </LinkButton>
            </LinkText>
            {!user && (
              <LinkText to="/login">
                <LinkButton
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  로그인/회원가입
                </LinkButton>
              </LinkText>
            )}
          </Box>
          {user && (
            <>
              {/*
              <NotificationsIcon sx={{ mr: '2rem' }} />
              */}
              <UserRelatedDropDown
                openUserMenu={handleOpenUserMenu}
                closeUserMenu={handleCloseUserMenu}
                anchorElUser={anchorElUser}
              />
            </>
          )}
        </Toolbar>
      </Container>
    </Navbar>
  );
};
export default ResponsiveAppBar;
