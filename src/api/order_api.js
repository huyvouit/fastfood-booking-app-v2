import axiosClient from './axiosClient.js';

const orderApi = {
  addOrder: body => {
    const url = '/order/add';
    return axiosClient.post(url, body);
  },
};

export default orderApi;
