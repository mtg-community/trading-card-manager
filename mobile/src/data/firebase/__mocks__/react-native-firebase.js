import type { UserCredential } from '../../../../../domain/entities/userCredential';

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
  },
};

const mockAuthModule = {
  signInAndRetrieveDataWithEmailAndPassword: jest.fn(() =>
    Promise.resolve(mockUserCredentials),
  ),
  createUserAndRetrieveDataWithEmailAndPassword: jest.fn(() =>
    Promise.resolve(mockUserCredentials),
  ),
  sendPasswordResetEmail: jest.fn(),
  onAuthStateChanged: jest.fn(() => mockUnsubscriberFunction),
};

Firebase.auth = () => mockAuthModule;

export default Firebase;
