import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useAuctionsQuery = (sort, pageNum) => {
  return useQuery(
    ['auctionList', sort, pageNum],
    () => auctionRelatedAPI.getAuctionLists(sort, pageNum),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useAuctionsQuery;
