// @flow strict

import Axios from 'axios';
import { Card } from 'core';
import Config from 'react-native-config';

export const getCardPage = async (
  page: number,
  pageSize: number,
): Promise<Card> =>
  Axios.get('/cards', { params: { page, pageSize } }).then(
    res => res.data.data || [],
  );

export const getCardCropImage = async (multiverseId: string): Promise<JSON> =>
  Axios.get(`${Config.SCRYFALL_API_URL}cards/multiverse/${multiverseId}`).then(
    res => res.data.image_uris.art_crop,
  );
