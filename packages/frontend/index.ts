import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { initializeDataLayer } from './src/data';
import { initializeDomainLayer } from './src/domain';
import { initializePresentationLayer } from './src/presentation';

const { BugSnag } = initializeDataLayer();
const store = initializeDomainLayer(BugSnag);

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(initializePresentationLayer(store));

