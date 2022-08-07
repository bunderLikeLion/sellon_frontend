import axios from 'axios';
import { baseUrl } from '../constants/URLS';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtom } from 'states';

const createInstance = () => {
  const timeout = 2000;
  const headers = {};

  return axios.create({
    baseURL: baseUrl,
    timeout,
    headers,
  });
};

const axiosInstance = createInstance();

const useExpirationHandler = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const handleResponse = (res) => {
    const { data } = res;
    return data;
  };

  const handlerError = (err) => {
    const { response } = err;
    const { data } = response;
    const accessToken = localStorage.getItem('access_token');

    if ([401, 403].includes(response.status) && accessToken) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      setUser(null);
      localStorage.clear();
      navigate('/login');
    }
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return { handleResponse, handlerError };
};

const AxiosInterceptor = ({ children }) => {
  const expirationChecker = useExpirationHandler();

  useEffect(() => {
    const resInterceptor = (response) => {
      return expirationChecker.handleResponse(response);
    };

    const errInterceptor = (error) => {
      return expirationChecker.handlerError(error);
    }

    axiosInstance.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    });

    const interceptor =  axiosInstance.interceptors.response.use(
      resInterceptor, errInterceptor
    );

    return () => axiosInstance.interceptors.response.eject(interceptor);

  }, [expirationChecker]);

  return children;
};

export { AxiosInterceptor, axiosInstance };
