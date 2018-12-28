import { initializeFirebase } from './firebase';
import { config } from 'dotenv';
import { initializeLogRocket } from './log-rocket';

export const initializeDataLayer = () => {
  config();
  initializeFirebase();

  if (process.env.NODE_ENV !== "development") {
    initializeLogRocket();
  }

};
