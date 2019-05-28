import { messagesPt } from './pt';
import { messagesEn } from './en';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';

export const allMessages = {
  pt: {
    ...messagesPt,
  },
  en: {
    ...messagesEn,
  },
};

export const allLocaleData = [...en, ...pt];
