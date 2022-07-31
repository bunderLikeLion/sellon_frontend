import { lazy, Suspense } from 'react';
import GlobalStyles from 'styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AxiosInterceptor } from './apis/config';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material';
import darkTheme from './themes/darkTheme';
import { WaveLoading } from 'react-loadingg';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Navbar = lazy(() => import('pages/Navbar/Navbar'));
const About = lazy(() => import('pages/About/About'));
const Auction = lazy(() => import('pages/Auction/Auction'));
const MyPage = lazy(() => import('pages/MyPage/MyPage'));
const Chat = lazy(() => import('pages/Chat/Chat'));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>
        <Toaster />
        <Router>
          <AxiosInterceptor>
            <Suspense fallback={<WaveLoading />}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/auction" element={<Auction />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </Suspense>
          </AxiosInterceptor>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
