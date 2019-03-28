import { addLocaleData } from 'react-intl';
import { allLocaleData, allMessages } from './messages';

export const initializeInternalization = () => {
  addLocaleData(allLocaleData);
  return { messages: allMessages };
};
