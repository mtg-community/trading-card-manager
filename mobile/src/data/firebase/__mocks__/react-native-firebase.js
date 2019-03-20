// @flow

import type { UserCredential } from 'core/src/entities/userCredential';

let Firebase = jest.mock('react-native-firebase');

export const mockUnsubscriberFunction = jest.fn();

export const mockUserCredentials: UserCredential = {
  additionalUserInfo: {
    isNewUser: false,
    providerId: 'password',
  },
  user: {
    email: 'eduardo@email.com',
    emailVerified: true,
    uid: 'HakunaMatata',
  },
};

const mockAuthModule = {
  signInWithEmailAndPassword: jest.fn(() =>
    Promise.resolve(mockUserCredentials),
  ),
  createUserWithEmailAndPassword: jest.fn(() =>
    Promise.resolve(mockUserCredentials),
  ),
  sendPasswordResetEmail: jest.fn(),
  onAuthStateChanged: jest.fn(() => mockUnsubscriberFunction),
};

Firebase.auth = () => mockAuthModule;

export default Firebase;
