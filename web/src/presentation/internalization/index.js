import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt'
import { allMessages } from './messages';

export const initializeInternalization = () => {
  const defaultLocale = 'en';
  addLocaleData([...en, ...pt]);

  return { defaultLocale, messages: allMessages };
};
