import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { initializeApplication } from './src';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(initializeApplication());
