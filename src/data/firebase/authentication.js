// @flow

import Firebase, { User } from 'react-native-firebase';
import isEmail from 'validator/lib/isEmail';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  if (!isEmail(email)) {
    throw new Error('Invalid Email');
  }

  return Firebase.auth().signInWithEmailAndPassword(email, password);
};
