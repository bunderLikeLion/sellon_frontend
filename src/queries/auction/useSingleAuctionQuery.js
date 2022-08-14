import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import queryKeys from 'utils/queryKeys';

const useSingleAuctionQuery = (id) => {
  return useQuery(
    [queryKeys.auctionInfo(id)],
    () => auctionRelatedAPI.getSingleAuctionInfo(id),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useSingleAuctionQuery;
