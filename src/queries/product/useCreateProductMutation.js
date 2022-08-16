import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productsRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import messages from 'constants/messages';

const useCreateProductMutation = () => {
  return useMutation(
    (payload) => {
      return productsRelatedAPI.postProduct(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.product.create.success);
        return queryClient.invalidateQueries(['myProductsData']);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateProductMutation;
