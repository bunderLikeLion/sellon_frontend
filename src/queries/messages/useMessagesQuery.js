import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';

const useMessagesQuery = (dealingId) => {
  return useQuery(
    ['messages', dealingId],
    productRelatedAPI.getProductCategoryLists,
    {
      refetchInterval: 1000 * 5,
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useMessagesQuery;
