// @flow strict

import Axios from 'axios';
import { Card } from 'core';

export const getCardPage = async (
  page: number,
  pageSize: number,
): Promise<Card> =>
  Axios.get('/cards', { params: { page, pageSize } }).then(
    res => res.data.data || [],
  );
