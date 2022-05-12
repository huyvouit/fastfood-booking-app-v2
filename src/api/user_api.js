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
};

export default userApi;
