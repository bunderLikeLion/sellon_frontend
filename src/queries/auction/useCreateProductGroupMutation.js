import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import { useDeleteProductMutation } from 'queries/product';
import queryKeys from 'utils/queryKeys';
import messages from 'constants/messages';

const useCreateProductGroupMutation = (relatedAuctionId) => {
  let itemId = 0;
  const { mutate: deleteProductFromInventory } = useDeleteProductMutation();

  return useMutation(
    (payload) => {
      itemId = payload.product_ids;
      return auctionRelatedAPI.postProductGroups(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.productGroup.create.succes);
        for (let singleId of itemId) {
          deleteProductFromInventory(singleId);
        }
        return queryClient.invalidateQueries([
          queryKeys.productGroups(relatedAuctionId),
        ]);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateProductGroupMutation;
