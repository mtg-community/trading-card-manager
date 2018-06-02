import User from 'react-native-firebase/lib/modules/auth/User';

let Firebase = jest.mock('react-native-firebase');

export const mockUser: User = {
  email: 'eduardo@email.com',
  emailVerified: true,
};

const mockAuthModule = {
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve(mockUser)),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve(mockUser)),
};

Firebase.auth = () => mockAuthModule;

export default Firebase;
