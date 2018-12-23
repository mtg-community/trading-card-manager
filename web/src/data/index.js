import { initializeFirebase } from './firebase';
import { config } from 'dotenv';
import { initializeLogRocket } from './log-rocket';

export const initializeDataLayer = () => {
  config();

  initializeLogRocket();
  initializeFirebase();
};
