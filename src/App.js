import { lazy, Suspense, useEffect } from 'react';
import GlobalStyles from 'styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axiosInstance, { AxiosInterceptor } from './apis/config';
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
const AuctionDetail = lazy(() => import('pages/AuctionDetail/AuctionDetail'));
const MyPage = lazy(() => import('pages/MyPage/MyPage'));
const Chat = lazy(() => import('pages/Chat/Chat'));
const ItemDetail = lazy(() => import('pages/MyPage/ItemDetail'));
<<<<<<< HEAD
const NewAuction1 = lazy(() => import('pages/Auction/NewAuction1'));
const NewAuction2 = lazy(() => import('pages/Auction/NewAuction2'));
=======
const TopRank = lazy(() => import('pages/TopRank/TopRank'));
>>>>>>> 6b8c04a495c25e02f200169fba5a7963554c21fa

const App = () => {
  useEffect(() => {
    if (performance.navigation.type === 1) {
      if (localStorage.getItem('access_token')) {
        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${localStorage.getItem('access_token')}`;
      }
    }
  });

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
                <Route path="/auction/detail" element={<AuctionDetail />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/mypage/itemdetail" element={<ItemDetail />} />
<<<<<<< HEAD
                <Route path="/auction/newauction1" element={<NewAuction1 />} />
                <Route path="/auction/newauction2" element={<NewAuction2 />} />
=======
                <Route path="/toprank" element={<TopRank />} />
>>>>>>> 6b8c04a495c25e02f200169fba5a7963554c21fa
              </Routes>
            </Suspense>
          </AxiosInterceptor>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
