import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productsRelatedAPI from 'apis/productsRelatredAPI';
import { queryClient } from 'index';
import messages from 'constants/messages';

const useDeleteProductMutation = () => {
  return useMutation(
    (payload) => {
      return productsRelatedAPI.deleteProduct(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.product.destroy.success);
        return queryClient.invalidateQueries(['myProductsData']);
      },
      onError: () => {
        toast.dismiss();
        toast.error(messages.product.destroy.error);
      },
    }
  );
};

export default useDeleteProductMutation;
