import { axiosInstance } from './config';

const client = axiosInstance;

const messagesRelatedAPI = {
  getMessages: (dealingId) => {
    return client
      .get('messages/', { params: { dealing_id: dealingId } })
      .then((res) => res.data);
  },

  postMessage: (payload) => {
    console.log(payload, 'ppppppppppppppppppppp');
    return client.post('messages/', payload).then((res) => res.data);
  },
};

export default messagesRelatedAPI;
