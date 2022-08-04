import axiosInstance from './config';

const client = axiosInstance;

const productsRelatedAPI = {
  getProductCategoryLists: () => {
    return client.get('products/category/');
  },

  postProduct: (payload) => {
    return client.post('products/', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  getMyProducts: () => {
    return client.get('products/');
  },
};

export default productsRelatedAPI;
