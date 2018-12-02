// @flow strict

import Firebase from 'react-native-firebase';
import { User } from 'domain/entities/user';

type UnsubscribeFunction = () => void;

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const {
    user,
  } = await Firebase.auth().signInAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );

  return new User(user.email, user.emailVerified);
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const {
    user,
  } = await Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );

  return new User(user.email, user.emailVerified);
};

export const onAuthStateChanged = (
  callback: (?User) => void,
): UnsubscribeFunction => {
  return Firebase.auth().onAuthStateChanged(callback);
};

export const signOut = async (): Promise<void> => Firebase.auth().signOut();

export const forgotPassword = async (email: string): Promise<void> =>
  Firebase.auth().sendPasswordResetEmail(email);
