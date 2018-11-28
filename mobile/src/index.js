// @flow strict

import { DomainLayer } from './domain';
import { PresentationLayer } from './presentation';

export const initializeApplication = async () => {
  await DomainLayer();
  await PresentationLayer();
};
