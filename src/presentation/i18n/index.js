// @flow strict

import I18n from 'react-native-i18n';

export const initializeI18n = () => {
  I18n.fallbacks = true;

  I18n.translations = {
    en: {
      greeting: 'Hi!',
      'SIGN_IN/BUTTON_TEXT': 'SIGN IN',
      'SIGN_IN/TITLE': 'Welcome to MTGX',
      'SIGN_IN/ERROR_TITLE': 'Couldn\'t sign in',
      'ERROR/BUTTON': 'Ok',
    },
    fr: {
      greeting: 'Bonjour!',
      'SIGN_IN/BUTTON_TEXT': 'ENTRAR',
    },
  };
};
