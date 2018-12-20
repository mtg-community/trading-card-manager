import { initializeFirebase } from './firebase';
import { config } from 'dotenv';

export const InitializeDataLayer = () => {
  config();
  initializeFirebase()
};
