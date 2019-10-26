import firebase from 'firebase/app';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MSG_SENDER_ID,
  FIREBASE_PROJECT_ID,
} from 'react-native-dotenv';
import 'firebase/auth';

const ERROR = {
  duplicatedApp: {
    code: 'app/duplicate-app',
    message:
      'Hot reload tried to initiate firebase again. Ignoring duplicated initialization',
  },
};

export const initializeFirebase = (): void => {
  const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MSG_SENDER_ID,
    projectId: FIREBASE_PROJECT_ID,
  };
  try {
    firebase.initializeApp(config);
  } catch (error) {
    if (error.code === ERROR.duplicatedApp.code) {
      console.info(ERROR.duplicatedApp.message);
    } else {
      throw error;
    }
  }
};
