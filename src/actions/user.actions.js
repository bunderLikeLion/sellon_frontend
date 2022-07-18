import { useRecoilState } from 'recoil';
import { userAtom } from 'state';
import axios from 'axios';
import { history } from 'utils';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const useUserActions = () => {
  const baseUrl = `${process.env.REACT_APP_API_URL}`;
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const handleResponse = (res) => {
    const data = res.data;
    if (res.statusText !== 'OK') {
      if ([401, 403].includes(res.status) && user?.token) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        removeCookie('user');
        setUser(null);
        navigate('/login');
      }
      const error = (data && data.message) || res.statusText;
      return Promise.reject(error);
    }
    return data;
  };

  const login = (username, password) => {
    const option = {
      method: 'get',
      url: `${baseUrl}/ping`,
      responseType: 'type',
      data: { username, password },
    };
    axios(option)
      .then((res) => handleResponse(res))
      .then((user) => {
        setCookie('user', user);
        setUser(user);
        navigate('/');
      });
  };

  const logout = () => {
    removeCookie('user');
    setUser(null);
    navigate('/login');
  };

  return { login, logout };
};

export { useUserActions };
