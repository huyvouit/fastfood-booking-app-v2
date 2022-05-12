import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import queryString from 'query-string';
// import { TOKEN_NAME, REFTOKEN } from "../Utils/constants";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
  baseURL: 'https://fastfood-booking-app.herokuapp.com/api', //process.env.
  headers: {
    'content-type': 'application/json',
  },

  paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(
  async config => {
    // Handle token here ...
    const token = await AsyncStorage.getItem('TOKEN_USER');
    console.log('token:', token);
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  err => err,
);

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  error => {
    // Handle errors
    throw error;
  },
);
export default axiosClient;
