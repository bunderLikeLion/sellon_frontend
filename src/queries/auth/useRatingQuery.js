import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import userRelatedAPI from '../../apis/userRelatedAPI';

const useRatingQuery = () => {
  const user = JSON.parse(localStorage.getItem('user_info'));

  return useQuery(['userRating'], () => userRelatedAPI.getUserRating(user.id), {
    onError: (res) => {
      toast.dismiss();
      toast.error(errorMsgHandler(res));
    },
  });
};

export default useRatingQuery;
