// @flow strict

import { initializeI18n } from './i18n';
import { initializeNavigation } from './navigation/config';

export const PresentationLayer = async () => {
  initializeI18n();
  await initializeNavigation();
};
