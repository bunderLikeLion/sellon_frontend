import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import queryKeys from 'utils/queryKeys';

const useSingleAuctionQuery = (id) => {
  return useQuery(
    ['auctionInfo', id],
    () => auctionRelatedAPI.getSingleAuctionInfo(id),
    {
      enabled: !!id,
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
      staleTime: 1000 * 60 * 3,
    }
  );
};

export default useSingleAuctionQuery;
