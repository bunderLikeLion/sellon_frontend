import GlobalStyles from 'styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Navbar, NavbarTest } from 'pages';
import { AxiosInterceptor } from './apis/config';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material';
import darkTheme from './themes/darkTheme';
import { useRecoilState } from 'recoil';
import { userAtom } from './states';
import { useEffect } from 'react';

const App = () => {
  const [user] = useRecoilState(userAtom);

  useEffect(() => {
    console.log(user, 'userInfo');
  }, [user]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>
        <Toaster />
        <Router>
          <AxiosInterceptor>
            <NavbarTest />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </AxiosInterceptor>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
