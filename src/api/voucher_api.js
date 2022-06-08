import axiosClient from './axiosClient.js';

const voucherApi = {
  getUsingVoucher: () => {
    const url = '/voucher/get-using-voucher';
    return axiosClient.get(url);
  },
  applyVoucher: params => {
    const url = '/voucher/apply';
    return axiosClient.get(url, {params});
  },

  cancelVoucher: params => {
    const url = '/voucher/cancel';
    return axiosClient.get(url, {params});
  },
};

export default voucherApi;
