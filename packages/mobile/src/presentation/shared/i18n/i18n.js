// @flow strict

import I18n from 'react-native-i18n';
import { en } from './languagues/english';
import { pt } from './languagues/portuguese';

export const initializeI18n = () => {
  I18n.fallbacks = true;

  I18n.translations = {
    en,
    pt,
  };
};
