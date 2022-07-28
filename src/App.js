import GlobalStyles from 'styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AxiosInterceptor } from './apis/config';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material';
import darkTheme from './themes/darkTheme';
import { useRecoilState } from 'recoil';
import { userAtom } from './states';
import {
  Home,
  Login,
  Register,
  Navbar,
  About,
  Auction,
  MyPage,
  Chat,
} from 'pages';
import WrapContainer from './layouts/WrapContainer';

const App = () => {
  const [user] = useRecoilState(userAtom);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>
        <Toaster />
        <Router>
          <AxiosInterceptor>
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
          </AxiosInterceptor>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
