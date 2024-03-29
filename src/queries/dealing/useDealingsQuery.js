import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import dealingsRelatedAPI from 'apis/dealingsRelatedAPI';

const useDealingsQuery = () => {
  return useQuery(['dealings'], dealingsRelatedAPI.getDealings, {
    onError: (res) => {
      toast.dismiss();
      toast.error(errorMsgHandler(res));
    },
  });
};

export default useDealingsQuery;
