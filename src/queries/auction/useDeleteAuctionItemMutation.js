import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import queryKeys from 'utils/queryKeys';

const useDeleteAuctionItemMutation = (auctionId) => {
  return useMutation(
    (itemIdObj) => {
      toast.loading('아이템 제시 철회 시도 중입니다....');
      return auctionRelatedAPI.deleteInventoryItem(auctionId, itemIdObj);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('아이템 제시 철회 성공했습니다 👍');
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

export default useDeleteAuctionItemMutation;
