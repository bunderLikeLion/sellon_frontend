import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import userRelatedAPI from 'apis/userRelatedAPI';

const useDealingCountQuery = () => {
  const user = JSON.parse(localStorage.getItem('user_info'));

  return useQuery(
    ['userDealingCount'],
    () => userRelatedAPI.getUserDealingCount(user.id),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
      staleTime: 1000 * 60 * 3,
    }
  );
};

export default useDealingCountQuery;
