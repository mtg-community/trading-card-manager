import { initializeDataLayer } from './data';
import { initializeDomainLayer } from './domain';
import { initializePresentationLayer } from './presentation';

export const initializeApplication = () =>  {
  const { BugSnag } = initializeDataLayer();
  const store = initializeDomainLayer(BugSnag);
  return initializePresentationLayer(store);
}
