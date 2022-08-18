import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productsRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import messages from 'constants/messages';

const useEditProductMutation = (productId) => {
  return useMutation(
    (payload) => {
      return productsRelatedAPI.putProduct(productId, payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.product.edit.success);
        return queryClient.invalidateQueries(['singleItem', productId]);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useEditProductMutation;
