import { axiosInstance } from './config';

const client = axiosInstance;

const userRelatedAPI = {
  postSignup: (data) => {
    client.post('users/', data).then((res) => res.data);
  },

  postLogin: (data) => {
    return client.post('users/login/', data).then((res) => res.data);
  },

  deleteWithdrawl: () => {
    return client.delete('users/user/destroy/').then((res) => res.data);
  },
};

export default userRelatedAPI;
