// @flow strict

// TODO: FIX THIS
// import type { UserCredential as FirebaseCredential } from 'react-native-firebase';

export type UserCredential = {
  additionalUserInfo: {
    isNewUser: boolean,
    providerId: string,
  },
  user: {
    email: string,
    emailVerified: boolean,
  },
};
