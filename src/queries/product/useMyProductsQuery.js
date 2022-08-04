import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';

const useMyProductsQuery = () => {
  return useQuery(['myProductsData'], productRelatedAPI.getMyProducts, {
    onError: (res) => {
      toast.dismiss();
      toast.error(errorMsgHandler(res.response.data));
    },
  });
};

export default useMyProductsQuery;
