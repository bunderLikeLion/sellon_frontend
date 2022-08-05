import axiosInstance from './config';

const client = axiosInstance;

const productsRelatedAPI = {
  getProductCategoryLists: () => {
    return client.get('product_categories/');
  },

  postProduct: (payload) => {
    return client.post('products/', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  getMyProducts: (pageNum) => {
    return client.get('products/', { params: { per_page: 6, page: pageNum } });
  },
};

export default productsRelatedAPI;
