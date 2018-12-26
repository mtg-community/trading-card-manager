import { initializeDataLayer } from './data';
import { initializeDomainLayer } from './domain';
import { initializePresentationLayer } from './presentation';
import {initializeTranslationLayer} from "./translation";

const initializeApplication = () => {
  initializeDataLayer();
  const { store } = initializeDomainLayer();
  const {locale, messages} = initializeTranslationLayer();
  initializePresentationLayer(store,locale,messages);
};

initializeApplication();
