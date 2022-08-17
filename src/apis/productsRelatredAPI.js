import { axiosInstance } from './config';

const client = axiosInstance;

const productsRelatedAPI = {
  getProductCategoryLists: () => {
    return client.get('product_categories/').then((res) => res.data);
  },

  postProduct: (payload) => {
    return client
      .post('products/', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },

  putProduct: (productId, payload) => {
    return client
      .patch(`products/${productId}/`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },

  getMyProducts: (pageNum, perPage) => {
    return client
      .get('products/', { params: { per_page: perPage, page: pageNum } })
      .then((res) => res.data);
  },

  deleteProduct: (productId) => {
    return client.delete(`products/${productId}/`).then((res) => res.data);
  },

  getSingleProduct: (productId) => {
    return client.get(`products/${productId}/`, {}).then((res) => res.data);
  },
};

export default productsRelatedAPI;
