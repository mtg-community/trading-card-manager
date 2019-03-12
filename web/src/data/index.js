import { config } from 'dotenv';
import { initializeFirebase } from './firebase';
import { initializeLogRocket } from './logRocket';
import { isProduction } from '../domain/services/environment';

export const initializeDataLayer = () => {
  config();
  initializeFirebase();

  if (isProduction()) {
    initializeLogRocket();
  }
};
