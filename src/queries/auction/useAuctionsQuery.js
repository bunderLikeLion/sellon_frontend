import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useAuctionsQuery = (sort, pageNum, cat) => {
  return useQuery(
    ['auctionList', sort, pageNum, cat],
    () => auctionRelatedAPI.getAuctionLists(sort, pageNum, cat),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useAuctionsQuery;
