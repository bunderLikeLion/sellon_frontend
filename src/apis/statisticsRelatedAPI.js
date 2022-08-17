import { axiosInstance } from './config';

const client = axiosInstance;

const statisticsRelatedAPI = {
  getMostProductGroupDealing: () => {
    return client
      .get('statistics/most_product_group_dealing/')
      .then((res) => res.data);
  },

  getMonthlyChampion: () => {
    return client.get('statistics/monthly_champion/').then((res) => res.data);
  },

  getDealingRanking: () => {
    return client.get('statistics/dealing_ranking/').then((res) => res.data);
  },
};

export default statisticsRelatedAPI;
