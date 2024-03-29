import { axiosInstance } from './config';

const client = axiosInstance;

const messagesRelatedAPI = {
  getMessages: (dealingId) => {
    return client
      .get('messages/', {
        params: { ordering: 'created_at', dealing_id: dealingId },
      })
      .then((res) => res.data);
  },

  postMessage: (payload) => {
    return client.post('messages/', payload).then((res) => res.data);
  },
};

export default messagesRelatedAPI;
