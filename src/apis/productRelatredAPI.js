import axiosInstance from './config';

const client = axiosInstance;

const productRelatedAPI = {
  getProductLists: () => {
    return client.get('products/category/');
  },
};

export default productRelatedAPI;
