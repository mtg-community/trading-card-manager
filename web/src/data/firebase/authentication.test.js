import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from './authentication';

import firebase from 'firebase/app';
import { User } from 'core';
jest.mock('firebase/app', function() {
  const mockFirebaseAuth = {
    setPersistence: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(),
  };

  const auth = () => mockFirebaseAuth;
  auth.Auth = {
    Persistence: {
      LOCAL: 'local',
    },
  };
  return {
    auth,
  };
});

const email = 'email@email.com';
const password = 'password';
const mockFirebaseUser = { uid: 'some_uid', email, emailVerified: true };

describe('Firebase Auth Module', function() {
  it('signs user in with LOCAL session persistence', async function() {
    const expectedUser = new User(
      mockFirebaseUser.uid,
      mockFirebaseUser.email,
      { emailVerified: mockFirebaseUser.emailVerified },
    );
    firebase
      .auth()
      .signInWithEmailAndPassword.mockImplementation(() =>
        Promise.resolve({ user: mockFirebaseUser }),
      );

    const user = await signInWithEmailAndPassword(email, password);

    expect(user).toEqual(expectedUser);
    expect(firebase.auth().setPersistence).toHaveBeenCalledWith(
      firebase.auth.Auth.Persistence.LOCAL,
    );
  });

  it('signs user up with LOCAL session persistence', async function() {
    const expectedUser = new User(
      mockFirebaseUser.uid,
      mockFirebaseUser.email,
      { emailVerified: mockFirebaseUser.emailVerified },
    );
    firebase
      .auth()
      .createUserWithEmailAndPassword.mockImplementation(() =>
        Promise.resolve({ user: mockFirebaseUser }),
      );

    const user = await signUpWithEmailAndPassword(email, password);

    expect(user).toEqual(expectedUser);
    expect(firebase.auth().setPersistence).toHaveBeenCalledWith(
      firebase.auth.Auth.Persistence.LOCAL,
    );
  });

  it("recovers user's password", async function() {
    await sendPasswordResetEmail(email);
    expect(firebase.auth().sendPasswordResetEmail).toHaveBeenCalledWith(email);
  });

  it('signs user out', async function() {
    await signOut(email);
    expect(firebase.auth().signOut).toHaveBeenCalled();
  });
});
