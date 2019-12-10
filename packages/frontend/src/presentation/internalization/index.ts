import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocalizationAsync } from 'expo-localization';
import { pt } from './pt';
import { en } from './en';

export const initializeInternalization = async (): Promise<void> => {
  const { locale } = await getLocalizationAsync();
  i18n.use(initReactI18next).init({
    resources: { pt, en },
    lng: locale,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
};
