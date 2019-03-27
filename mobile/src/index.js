// @flow strict

import { PresentationLayer } from './presentation';
import { initializeAxios } from 'domain/service';

export const initializeApplication = async () => {
  initializeAxios();
  await PresentationLayer();
};
