import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { initializeDataLayer } from './data/DataLayer';
import { initializeDomainLayer } from './domain/DomainLayer';
import { initializePresentationLayer } from './presentation/PresentationLayer';

if (__DEV__) {
  activateKeepAwake();
}

const { BugSnag } = initializeDataLayer();
const store = initializeDomainLayer(BugSnag);
const App = initializePresentationLayer(store);

registerRootComponent(App);
