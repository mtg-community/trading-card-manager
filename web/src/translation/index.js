import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt'
import { allMessages } from './messages';

export const initializeTranslationLayer = () => {
  addLocaleData([...en, ...pt]);
  const locale = window.navigator.language.split('-')[0];
  const messages =  allMessages[locale];
  return {
    locale,
    messages
  }
};
