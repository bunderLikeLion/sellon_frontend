import GlobalStyles from 'styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Navbar } from 'pages';
import { AxiosInterceptor } from './apis/config';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster />
      <Router>
        <AxiosInterceptor>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AxiosInterceptor>
      </Router>
    </>
  );
};

export default App;
