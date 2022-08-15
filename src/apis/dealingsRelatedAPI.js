import { axiosInstance } from './config';

const client = axiosInstance;

const dealingsRelatedAPI = {
  getTodayCompletedCnt: () => {
    return client
      .get('dealings/today_completed_count/')
      .then((res) => res.data);
  },

  postDealing: (payload) => {
    return client.post('dealings/', payload).then((res) => res.data);
  },

  getDealings: () => {
    return client
      .get('dealings/', {
        params: {
          per_page: 30,
        },
      })
      .then((res) => res.data);
  },

  postDealingRating: (payload) => {
    return client.post('dealings/evaluation/', payload).then((res) => res.data);
  },

  postCompleteDealing: (dealingId) => {
    return client
      .post(`dealings/${dealingId}/complete/`)
      .then((res) => res.data);
  },
};

export default dealingsRelatedAPI;
