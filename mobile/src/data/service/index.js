import Axios from 'axios';
import Config from 'react-native-config';

export const initializeAxios = () => {
  Axios.defaults.baseURL = Config.BASE_URL;
  Axios.defaults.headers.post['Content-Type'] = 'application/json';
  Axios.defaults.headers.post['Accept'] = 'application/json';
};
