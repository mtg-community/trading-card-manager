// @flow strict

import Firebase, { type UserCredential } from 'react-native-firebase';
import { User } from 'core';

type UnsubscribeFunction = () => void;

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const userCredential = await Firebase.auth().signInWithEmailAndPassword(
    email,
    password,
  );

  const user = userCredential.user;

  return new User(user.uid, user.email, user.emailVerified);
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const userCredential = await Firebase.auth().createUserWithEmailAndPassword(
    email,
    password,
  );

  const user = userCredential.user;

  return new User(user.uid, user.email, user.emailVerified);
};

export const onAuthStateChanged = (
  callback: (?User) => void,
): UnsubscribeFunction => {
  return Firebase.auth().onAuthStateChanged(callback);
};

export const signOut = async (): Promise<void> => Firebase.auth().signOut();

export const forgotPassword = async (email: string): Promise<void> =>
  Firebase.auth().sendPasswordResetEmail(email);
