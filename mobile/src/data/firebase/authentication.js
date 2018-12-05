// @flow strict

import Firebase, { type UserCredential } from 'react-native-firebase';
import { User } from 'core/src/entities/user';

type UnsubscribeFunction = () => void;

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const userCredential = await Firebase.auth().signInAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );

  const user = userCredential.user;
  if (user && user.email) {
    return new User(user.email, user.emailVerified);
  } else {
    throw new Error('Firebase return user without email');
  }
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const userCredential = await Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );

  const user = userCredential.user;
  if (user && user.email) {
    return new User(user.email, user.emailVerified);
  } else {
    throw new Error('Firebase return user without email');
  }
};

export const onAuthStateChanged = (
  callback: (?User) => void,
): UnsubscribeFunction => {
  return Firebase.auth().onAuthStateChanged(callback);
};

export const signOut = async (): Promise<void> => Firebase.auth().signOut();

export const forgotPassword = async (email: string): Promise<void> =>
  Firebase.auth().sendPasswordResetEmail(email);
