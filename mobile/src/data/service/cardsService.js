import Axios from 'axios';

export const getCardPage = async (page, pageSize) =>
  Axios.get('/cards', { params: { page, pageSize } }).then(
    res => res.data.data || [],
  );
