import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import dealingsRelatedAPI from '../../apis/dealingsRelatedAPI';

const useDealingHistoryQuery = (pageNum) => {
  return useQuery(
    ['getDealingHistory', pageNum],
    () => dealingsRelatedAPI.getDealingHistory(pageNum),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
      staleTime: 1000 * 60 * 3,
    }
  );
};
export default useDealingHistoryQuery;
