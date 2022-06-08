import axiosClient from './axiosClient.js';

const favoriteApi = {
  getListIdFavorite: body => {
    const url = '/favorite/product-by-user';
    return axiosClient.get(url);
  },

  getAllsFavoriteByUser: params => {
    const url = '/favorite/all-products-by-user';
    return axiosClient.get(url, {params});
  },
  addFavorite: body => {
    const url = '/favorite/add';
    return axiosClient.post(url, body);
  },
};

export default favoriteApi;
