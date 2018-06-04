// @flow strict

import I18n from 'react-native-i18n';

export const initializeI18n = () => {
  I18n.fallbacks = true;

  I18n.translations = {
    en: {
      greeting: 'Hi!',
      EMAIL_ADDRESS: 'Email Address',
      PASSWORD: 'Password',
      'FORGOT_PASSWORD/TITLE': 'Forgot your password?',
      'FORGOT_PASSWORD/BUTTON_TEXT': 'Recover it',
      'SIGN_UP/BUTTON_TEXT': 'SIGN UP',
      'SIGN_UP/TITLE': 'Create Your Account',
      'SIGN_UP/ERROR_TITLE': "Couldn't sign up",
      'SIGN_IN/BUTTON_TEXT': 'SIGN IN',
      'SIGN_IN/TITLE': 'Welcome to MTGX',
      'SIGN_IN/ERROR_TITLE': "Couldn't sign in",
      'ERROR/BUTTON': 'Ok',
      'AUTH/FOOTER/SIGN_IN_BUTTON': 'BACK TO LOGIN',
      'SIGN_IN/FOOTER/SIGN_UP_BUTTON': 'CREATE AN ACCOUNT',
      'SIGN_IN/FOOTER/RECOVER_TEXT': 'Forgot your password?',
      'SIGN_IN/FOOTER/RECOVER_LINK': 'Recover it HERE',
    },
    fr: {
      greeting: 'Bonjour!',
      'SIGN_IN/BUTTON_TEXT': 'ENTRAR',
    },
  };
};
