import axiosClient from './axiosClient.js';

const orderApi = {
  addToCart: body => {
    const url = '/order/add';
    return axiosClient.post(url, body);
  },
};

export default orderApi;
