import axiosClient from './axiosClient.js';

const cartApi = {
  addToCart: body => {
    const url = '/cart/add-to-cart';
    return axiosClient.post(url, body);
  },
  getByUser: params => {
    const url = '/cart/get-by-user';
    return axiosClient.get(url, {params});
  },
};

export default cartApi;
