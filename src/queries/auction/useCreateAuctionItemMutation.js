import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import queryKeys from 'utils/queryKeys';
import messages from 'constants/messages';

const useCreateAuctionItemMutation = (auctionId) => {
  return useMutation(
    (itemIdObj) => {
      return auctionRelatedAPI.postInventoryItem(auctionId, itemIdObj);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.auction.addItem.success);
        queryClient.invalidateQueries(['myProductsData']).then(() => {
          queryClient
            .invalidateQueries([queryKeys.myProductGroup(auctionId)])
            .then(() => {
              return queryClient.invalidateQueries([
                queryKeys.productGroups(auctionId),
              ]);
            });
        });
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateAuctionItemMutation;
