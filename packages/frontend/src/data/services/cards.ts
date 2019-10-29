import axios, { AxiosResponse } from 'axios';
import { Card } from '../../domain/entities/Card';

export async function getCardPage(
  page: number,
  pageSize: number,
): Promise<AxiosResponse<Card>> {
  return axios
    .get('/cards', { params: { page, pageSize } })
    .then(res => res.data);
}
