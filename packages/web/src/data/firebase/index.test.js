import cloneDeep from 'lodash/cloneDeep';
import { initializeFirebase } from './index';
import firebase from 'firebase/app';
jest.mock('firebase/app');

describe('Firebase initialization', function() {
  const env = cloneDeep(process.env);
  const envVarsToInject = {
    REACT_APP_FIREBASE_API_KEY: 'REACT_APP_FIREBASE_API_KEY',
    REACT_APP_FIREBASE_AUTH_DOMAIN: 'REACT_APP_FIREBASE_AUTH_DOMAIN',
    REACT_APP_FIREBASE_DATABASE_URL: 'REACT_APP_FIREBASE_DATABASE_URL',
    REACT_APP_FIREBASE_STORAGE_BUCKET: 'REACT_APP_FIREBASE_STORAGE_BUCKET',
    REACT_APP_FIREBASE_MSG_SENDER_ID: 'REACT_APP_FIREBASE_MSG_SENDER_ID',
    REACT_APP_FIREBASE_PROJECT_ID: 'REACT_APP_FIREBASE_PROJECT_ID',
  };

  afterAll(() => {
    process.env = env;
  });

  it('initializes using the correct env vars', function() {
    process.env = { ...env, ...envVarsToInject };
    const expectedConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    };

    initializeFirebase();

    expect(firebase.initializeApp).toHaveBeenCalledWith(expectedConfig);
  });
});
