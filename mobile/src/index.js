// @flow strict

import { PresentationLayer } from './presentation';
import { initializeAxios } from 'data/service';

export const initializeApplication = async () => {
  initializeAxios();
  await PresentationLayer();
};
