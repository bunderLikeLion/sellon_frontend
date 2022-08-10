import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useSingleAuctionQuery = (id) => {
  return useQuery(
    ['auctionInfo'],
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
