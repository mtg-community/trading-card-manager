import axios from 'axios';
import { REST_API_BASE_URL } from 'react-native-dotenv';

export const initializeAxios = (): void => {
  axios.defaults.baseURL = REST_API_BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
  axios.interceptors.response.use(response => response.data);
};
