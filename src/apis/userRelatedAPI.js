import axiosInstance from './config';

const client = axiosInstance;

const userRelatedAPI = {
  postSignup: (data) => {
    return client.post('users/', data);
  },

  postLogin: (data) => {
    return client.post('users/login/', data);
  },
};

export default userRelatedAPI;
