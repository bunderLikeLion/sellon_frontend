import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import queryKeys from 'utils/queryKeys';

const useProductGroupsQuery = (relatedAuctionId) => {
  return useQuery(
    [queryKeys.productGroups(relatedAuctionId)],
    () => auctionRelatedAPI.getProductGroups(relatedAuctionId),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useProductGroupsQuery;
