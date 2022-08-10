import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useAuctionsQuery = (sort) => {
  return useQuery(
    ['auctionList', sort],
    () => auctionRelatedAPI.getAuctionLists(sort),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useAuctionsQuery;
