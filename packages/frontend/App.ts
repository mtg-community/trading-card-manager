import { initializeDomainLayer } from './src/domain';
import { initializeDataLayer } from './src/data';
import { initializePresentationLayer } from './src/presentation';

const { BugSnag } = initializeDataLayer();
const store = initializeDomainLayer(BugSnag);
const Presentation = initializePresentationLayer(store);

export default Presentation;
