import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';

const useCategoryQuery = () => {
  return useQuery(['formCatData'], productRelatedAPI.getProductCategoryLists, {
    onError: (res) => {
      toast.dismiss();
      toast.error(errorMsgHandler(res));
    },
    staleTime: 1000 * 60 * 10,
  });
};

export default useCategoryQuery;
