import { axiosInstance } from './config';

const client = axiosInstance;

const messagesRelatedAPI = {
  getMessages: () => {
    return client.get('messages/').then((res) => res.data);
  },

  postMessage: (payload) => {
    return client.post('messages/', payload).then((res) => res.data);
  },
};

export default messagesRelatedAPI;
