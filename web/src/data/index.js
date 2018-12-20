import { initializeFirebase } from './firebase';
import { config } from 'dotenv';

export const initializeDataLayer = () => {
  config();
  initializeFirebase()
};
