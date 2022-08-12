import { axiosInstance } from './config';

const client = axiosInstance;

const statisticsRelatedAPI = {
  getMostProductGroupDealing: () => {
    return client
      .get('statistics/most_product_group_dealing/')
      .then((res) => res.data);
  },
};

export default statisticsRelatedAPI;
