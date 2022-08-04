import axiosInstance from './config';

const client = axiosInstance;

const productsRelatedAPI = {
  getProductLists: () => {
    return client.get('products/category/');
  },
  postProduct: (payload) => {
    return client.post('/products/', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default productsRelatedAPI;
