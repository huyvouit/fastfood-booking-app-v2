import axiosClient from './axiosClient.js';

const orderApi = {
  addOrder: body => {
    const url = '/order/add';
    return axiosClient.post(url, body);
  },

  getUpComingOrder: params => {
    const url = '/order/delivery';
    return axiosClient.get(url, {params});
  },

  getHistoryOrder: params => {
    const url = '/order/success';
    return axiosClient.get(url, {params});
  },
  getCancelOrder: params => {
    const url = '/order/cancel';
    return axiosClient.get(url, {params});
  },
  cancelOrder: body => {
    const url = '/order/cancel-order';
    return axiosClient.post(url, body);
  },
};

export default orderApi;
