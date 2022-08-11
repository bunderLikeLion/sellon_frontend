import { axiosInstance } from './config';

const client = axiosInstance;

const dealingsRelatedAPI = {
  getTodayCompletedCnt: () => {
    return client
      .get('dealings/today_completed_count/')
      .then((res) => res.data);
  },
};

export default dealingsRelatedAPI;
