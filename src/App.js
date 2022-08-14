import { lazy, Suspense, useEffect } from 'react';
import GlobalStyles from 'styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AxiosInterceptor } from './apis/config';
import { Toaster } from 'react-hot-toast';
import { WaveLoading } from 'react-loadingg';
import styled from 'styled-components';
import UserInfoChange from 'pages/MyPage/UserInfoChange';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Navbar = lazy(() => import('pages/Navbar/Navbar'));
const About = lazy(() => import('pages/About/About'));
const Auction = lazy(() => import('pages/Auction/Auction'));
const AuctionDetail = lazy(() => import('pages/AuctionDetail/AuctionDetail'));
const Auctioneer = lazy(() => import('pages/AuctionAuctioneer/Auctioneer'));
const MyPage = lazy(() => import('pages/MyPage/MyPage'));
const Chat = lazy(() => import('pages/Chat/Chat'));
const ItemDetail = lazy(() => import('pages/MyPage/ItemDetail'));
const NewAuction = lazy(() => import('pages/NewAuction/NewAuction'));
const TopRank = lazy(() => import('pages/TopRank/TopRank'));

const EntireContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.color_background__default};
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster />
      <Router>
        <AxiosInterceptor>
          <EntireContainer>
            <Suspense fallback={<WaveLoading />}>
              <Navbar />
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/auction" element={<Auction />} />
                <Route path="/auction/:id" element={<AuctionDetail />} />
                <Route
                  path="/auctioneer/:id/:product"
                  element={<Auctioneer />}
                />
                <Route path="/toprank" element={<TopRank />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/itemdetail/:id" element={<ItemDetail />} />
                <Route path="/auction/newauction" element={<NewAuction />} />
                <Route path="/mypage/infochange" element={<UserInfoChange />} />
              </Routes>
            </Suspense>
          </EntireContainer>
        </AxiosInterceptor>
      </Router>
    </>
  );
};

export default App;
