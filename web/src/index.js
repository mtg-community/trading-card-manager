import { initializeDataLayer } from './data';
import { initializeDomainLayer } from './domain';
import { initializePresentationLayer } from './presentation';

const initializeApplication = () => {
  initializeDataLayer();
  const { store } = initializeDomainLayer();
  initializePresentationLayer(store);
};

initializeApplication();
