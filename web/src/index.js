import { InitializeDataLayer } from './data';
import { InitializeDomainLayer } from './domain';
import { InitializePresentationLayer } from './presentation';

InitializeDataLayer();
const { store } = InitializeDomainLayer();
InitializePresentationLayer(store);
