import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import dealingsRelatedAPI from 'apis/dealingsRelatedAPI';

const useTodayCompletedQuery = () => {
  return useQuery(
    ['todayCompletedCnt'],
    dealingsRelatedAPI.getTodayCompletedCnt,
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useTodayCompletedQuery;
