// @flow strict

import { initializeI18n, initializeNavigator } from './shared';

export const PresentationLayer = async () => {
  initializeI18n();
  await initializeNavigator();
};
