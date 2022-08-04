import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';

const useCategoryQuery = () => {
  return useQuery(['formCatData'], productRelatedAPI.getProductLists, {
    onError: (res) => {
      toast.dismiss();
      toast.error(errorMsgHandler(res.response.data));
    },
  });
};

export default useCategoryQuery;
