import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';

const useMyProductsQuery = (pageNum) => {
  return useQuery(
    ['myProductsData', pageNum],
    () => productRelatedAPI.getMyProducts(pageNum),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res.response.data));
      },
    }
  );
};

export default useMyProductsQuery;
