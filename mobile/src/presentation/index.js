// @flow strict

import { initializeI18n } from './i18n';
import { initializeNavigator } from './navigator/config';

export const PresentationLayer = async () => {
  initializeI18n();
  await initializeNavigator();
};
