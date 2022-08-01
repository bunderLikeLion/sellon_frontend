import axios from 'axios';
import { baseUrl } from '../constants/URLS';
import { useExpirationHandler } from 'hooks';
import { useEffect } from 'react';

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

const AxiosInterceptor = ({ children }) => {
  const expirationChecker = useExpirationHandler();

  useEffect(() => {
    const resInterceptor = (response) => {
      return expirationChecker.handleResponse(response);
    };

    const interceptor = axiosInstance.interceptors.response.use(resInterceptor);

    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, [expirationChecker]);

  return children;
};

export default axiosInstance;
export { AxiosInterceptor };
