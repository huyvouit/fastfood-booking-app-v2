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

  updateItemCart: body => {
    const url = '/cart/update';
    return axiosClient.put(url, body);
  },
  removeItemInCart: body => {
    const url = '/cart/remove';
    return axiosClient.post(url, body);
  },

  deleteCart: () => {
    const url = '/cart/delete';
    return axiosClient.delete(url);
  },
};

export default cartApi;
