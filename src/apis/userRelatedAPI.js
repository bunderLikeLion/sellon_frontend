import { axiosInstance } from './config';

const client = axiosInstance;

const userRelatedAPI = {
  postSignup: (data) => {
    return client.post('users/', data);
  },

  postLogin: (data) => {
    return client.post('users/login/', data).then((res) => res.data);
  },

  deleteWithdrawl: () => {
    return client.delete('users/user/destroy/').then((res) => res.data);
  },

  getUserRating: (userId) => {
    return client.get(`users/user/${userId}/rating/`).then((res) => res.data);
  },
};

export default userRelatedAPI;
