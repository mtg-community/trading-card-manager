// @flow strict

import { initializeI18n } from './i18n';
import { initializeNavigator } from './navigation';

export const PresentationLayer = async () => {
  initializeI18n();
  await initializeNavigator();
};
