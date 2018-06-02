import type { UserCredential } from 'react-native-firebase';

let Firebase = jest.mock('react-native-firebase');

export const mockUserCredentials: UserCredential = {
  additionalUserInfo: {
    isNewUser: false,
    providerId: 'firebase',
  },
  user: {
    email: 'eduardo@email.com',
    emailVerified: true,
  },
};

const mockAuthModule = {
  signInAndRetrieveDataWithEmailAndPassword: jest.fn(() =>
    Promise.resolve(mockUserCredentials),
  ),
  createUserAndRetrieveDataWithEmailAndPassword: jest.fn(() =>
    Promise.resolve(mockUserCredentials),
  ),
};

Firebase.auth = () => mockAuthModule;

export default Firebase;
