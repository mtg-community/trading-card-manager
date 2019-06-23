import { auth } from 'firebase/app';
import { User } from 'core';

export const signInWithEmailAndPassword = async (email, password) => {
  await setPersistence();
  const userCredential = await auth().signInWithEmailAndPassword(
    email,
    password,
  );
  return mapFirebaseUserToUser(userCredential);
};

export const signUpWithEmailAndPassword = async (email, password) => {
  await setPersistence();
  const userCredential = await auth().createUserWithEmailAndPassword(
    email,
    password,
  );
  return mapFirebaseUserToUser(userCredential);
};

export const sendPasswordResetEmail = async email =>
  auth().sendPasswordResetEmail(email);

export const signOut = async () => auth().signOut();

export const onAuthStateChanged = (callback, onError, onCompleted) => {
  const mappedCallback = firebaseUser => {
    if (firebaseUser) {
      return callback(mapFirebaseUserToUser({ user: firebaseUser }));
    }

    return callback(null);
  };
  return auth().onAuthStateChanged(mappedCallback, onError, onCompleted);
};

function mapFirebaseUserToUser({ user }) {
  return new User(user.uid, user.email, { emailVerified: user.emailVerified });
}

function setPersistence() {
  return auth().setPersistence(auth.Auth.Persistence.LOCAL);
}
