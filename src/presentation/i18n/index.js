// @flow strict

import I18n from 'react-native-i18n';
import { en } from './en';
import { pt } from './pt';

export const initializeI18n = () => {
  I18n.fallbacks = true;

  I18n.translations = {
    en: pt,
    pt,
  };
};
