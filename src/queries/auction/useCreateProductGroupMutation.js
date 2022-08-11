import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import { useDeleteProductMutation } from 'queries/product';

const useCreateProductGroupMutation = (relatedAuctionId) => {
  let itemId = 0;
  const { mutate: deleteProductFromInventory } = useDeleteProductMutation();

  return useMutation(
    (payload) => {
      itemId = payload.product_ids;
      toast.loading('아이템 등록 시도 중입니다....');
      return auctionRelatedAPI.postProductGroups(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('아이템 생성 성공했습니다 👍');
        for (let singleId of itemId) {
          deleteProductFromInventory(singleId);
        }
        return queryClient.invalidateQueries(['productGroups']);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateProductGroupMutation;
