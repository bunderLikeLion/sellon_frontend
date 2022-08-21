import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import statisticsRelatedAPI from 'apis/statisticsRelatedAPI';

const useMonthlyChampionQuery = () => {
  return useQuery(
    ['champion'],
    () => statisticsRelatedAPI.getMonthlyChampion(),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useMonthlyChampionQuery;
