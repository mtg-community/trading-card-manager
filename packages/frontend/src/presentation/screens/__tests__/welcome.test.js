import React from 'react';
import firebase from 'firebase/app';
import { logInAsync } from 'expo-google-app-auth';
import { logInWithReadPermissionsAsync } from 'expo-facebook';
import {
  render,
  fireEvent,
  waitForElement,
} from 'react-native-testing-library';
import { User } from '../../../domain/entities';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';
import {
  emailInputPlaceholder,
  passwordInputPlaceholder,
  Welcome,
} from '../Welcome';

const homeScreenRouteName = 'Home';
const email = 'email@email.com';
const testPassword = 'password';
const signInButtonText = 'Sign In';
const signInWithGoogleButtonText = 'Sign In With Google';
const signInWithFacebookButtonText = 'Sign In With Facebook';
const mockFirebaseUser = { uid: 'some_uid', email, emailVerified: true };
jest.mock('firebase/app', function() {
  const mockFirebaseAuth = {
    setPersistence: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signInWithCredential: jest.fn(),
    GoogleAuthProvider: {
      credential: jest.fn(),
    },
  };
  const auth = () => mockFirebaseAuth;
  auth.Auth = {
    Persistence: {
      LOCAL: 'local',
    },
    GoogleAuthProvider: {
      credential: jest.fn(),
    },
  };
  return {
    auth,
  };
});
jest.mock('expo-google-app-auth', function() {
  return {
    logInAsync: jest.fn(),
  };
});
jest.mock('expo-facebook', function() {
  return {
    logInWithReadPermissionsAsync: jest.fn(),
  };
});

describe('Welcome screen test', () => {
  let store = initializeDomainLayer();
  const navigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    store = initializeDomainLayer();
    jest.clearAllMocks();
  });

  test('should sign in with email and password', async () => {
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
    const { getByPlaceholder, getByText } = render(
      <MockedProvider store={store}>
        <Welcome navigation={navigation} />
      </MockedProvider>,
    );

    const emailInput = getByPlaceholder(emailInputPlaceholder);
    const passwordInput = getByPlaceholder(passwordInputPlaceholder);
    const signInButton = getByText(signInButtonText);

    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, testPassword);
    fireEvent.press(signInButton);

    expect(emailInput.props.value).toEqual(email);
    expect(passwordInput.props.value).toEqual(testPassword);
    await waitForElement(() =>
      expect(store.getState().authentication.user).toEqual(expectedUser),
    );
    expect(navigation.navigate).toHaveBeenCalledWith(homeScreenRouteName);
  });

  test('should sign in with google provider', async () => {
    const { getByText } = render(
      <MockedProvider store={store}>
        <Welcome navigation={navigation} />
      </MockedProvider>,
    );

    const signInWithGoogleButton = getByText(signInWithGoogleButtonText);

    fireEvent.press(signInWithGoogleButton);

    await waitForElement(() => expect(logInAsync).toBeCalled());
  });

  test('should sign in with facebook provider', async () => {
    const { getByText } = render(
      <MockedProvider store={store}>
        <Welcome navigation={navigation} />
      </MockedProvider>,
    );

    const signInWithFacebookButton = getByText(signInWithFacebookButtonText);

    fireEvent.press(signInWithFacebookButton);

    await waitForElement(() =>
      expect(logInWithReadPermissionsAsync).toBeCalled(),
    );
  });
});
