import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';

const useSingleProductQuery = (itemId) => {
  return useQuery(
    [`singleItem${itemId}`, itemId],
    () => productRelatedAPI.getSingleProduct(itemId),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res.response.data));
      },
    },
    { keepPreviousData: true }
  );
};

export default useSingleProductQuery;
