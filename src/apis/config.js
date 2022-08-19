import axios from 'axios';
import { baseUrl } from '../constants/URLS';
import { useEffect } from 'react';

const createInstance = () => {
  const timeout = 1000 * 4;
  const headers = {};

  return axios.create({
    baseURL: baseUrl,
    timeout,
    headers,
  });
};

const axiosInstance = createInstance();

const AxiosInterceptor = ({ children }) => {
  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken)
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    });
  }, []);

  return children;
};

export { AxiosInterceptor, axiosInstance };
