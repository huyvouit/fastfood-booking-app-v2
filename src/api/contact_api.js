import axiosClient from './axiosClient.js';

const contactApi = {
  postContact: body => {
    const url = '/contact/add';
    return axiosClient.post(url, body);
  },
};

export default contactApi;
