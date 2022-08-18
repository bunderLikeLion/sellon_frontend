import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import queryKeys from 'utils/queryKeys';

const useMyProductGroupQuery = (relatedAuctionId, userId, page) => {
  return useQuery(
    [queryKeys.myProductGroup(relatedAuctionId), page, userId],
    () => auctionRelatedAPI.getProductGroups(relatedAuctionId, userId, page, 4),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useMyProductGroupQuery;
