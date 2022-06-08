import axiosClient from './axiosClient.js';

const userApi = {
  register: body => {
    const url = '/user/create-user';
    return axiosClient.post(url, body);
  },
  login: params => {
    const url = '/user/login';
    return axiosClient.get(url, {params});
  },
  getUserInfo: () => {
    const url = '/user/get-user-info';
    return axiosClient.get(url);
  },
  updateUserInfo: body => {
    const url = '/user/update';
    return axiosClient.put(url, body);
  },

  getAllAddress: params => {
    const url = '/address';
    return axiosClient.get(url, {params});
  },

  getDefaultAddress: body => {
    const url = '/address/add-default';
    return axiosClient.post(url, body);
  },
  deleteAddress: body => {
    const url = '/address/delete';
    return axiosClient.post(url, body);
  },
};

export default userApi;
