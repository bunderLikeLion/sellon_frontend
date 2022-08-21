import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';

const useMyProductsQuery = (pageNum, perPage) => {
  return useQuery(
    ['myProductsData', pageNum, perPage],
    () => productRelatedAPI.getMyProducts(pageNum, perPage),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useMyProductsQuery;
