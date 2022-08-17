import { lazy, Suspense } from 'react';
import GlobalStyles from 'styles/globalStyles';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { AxiosInterceptor } from './apis/config';
import { Toaster } from 'react-hot-toast';
import { WaveLoading } from 'react-loadingg';
import styled from 'styled-components';
import UserInfoChange from 'pages/MyPage/UserInfoChange';
import { useRecoilValue } from 'recoil';
import { userAtom } from './states';

const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Navbar = lazy(() => import('pages/Navbar/Navbar'));
const About = lazy(() => import('pages/About/About'));
const Auction = lazy(() => import('pages/Auction/Auction'));
const AuctionDetail = lazy(() => import('pages/AuctionDetail/AuctionDetail'));
const Auctioneer = lazy(() => import('pages/AuctionAuctioneer/Auctioneer'));
const MyPage = lazy(() => import('pages/MyPage/MyPage'));
const ItemDetail = lazy(() => import('pages/MyPage/ItemDetail'));
const ItemInfoChange = lazy(() => import('pages/MyPage/ItemInfoChange'));
const NewAuction = lazy(() => import('pages/NewAuction/NewAuction'));
const TopRank = lazy(() => import('pages/TopRank/TopRank'));

const EntireContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.color_background__default};
`;

const App = () => {
  const userData = useRecoilValue(userAtom);

  const authChecker = () => {
    return userData;
  };

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
                <Route path="/login/1" element={<Login />} />
                <Route
                  path="/mypage"
                  element={
                    authChecker() ? <MyPage /> : <Navigate to="/login/1" />
                  }
                />
                <Route
                  path="/mypage/chat"
                  element={
                    authChecker() ? <MyPage /> : <Navigate to="/login/1" />
                  }
                />
                <Route path="/auction" element={<Auction />} />
                <Route
                  path="/auction/:id"
                  element={
                    authChecker() ? (
                      <AuctionDetail />
                    ) : (
                      <Navigate to="/login/1" />
                    )
                  }
                />
                <Route
                  path="/auctioneer/:id/:product"
                  element={
                    authChecker() ? <Auctioneer /> : <Navigate to="/login/1" />
                  }
                />
                <Route path="/toprank" element={<TopRank />} />
                <Route
                  path="/itemdetail/:id"
                  element={
                    authChecker() ? <ItemDetail /> : <Navigate to="/login/1" />
                  }
                />
                <Route
                  path="/auction/newauction"
                  element={
                    authChecker() ? <NewAuction /> : <Navigate to="/login/1" />
                  }
                />
                <Route
                  path="/mypage/infochange"
                  element={
                    authChecker() ? (
                      <UserInfoChange />
                    ) : (
                      <Navigate to="/login/1" />
                    )
                  }
                />
                <Route
                  path="/itemdetail/iteminfochange"
                  element={
                    authChecker() ? (
                      <ItemInfoChange />
                    ) : (
                      <Navigate to="/login/1" />
                    )
                  }
                />
              </Routes>
            </Suspense>
          </EntireContainer>
        </AxiosInterceptor>
      </Router>
    </>
  );
};

export default App;
