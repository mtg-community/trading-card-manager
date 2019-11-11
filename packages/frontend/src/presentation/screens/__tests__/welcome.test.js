import React from 'react';
import firebase from 'firebase/app';
import {
  render,
  fireEvent,
  waitForElement,
} from 'react-native-testing-library';
import { User } from '../../../domain/entities';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';
import { Welcome } from '../Welcome';

const homeScreenRouteName = 'Home';
const emailInputPlaceholder = 'Email';
const passwordInputPlaceholder = 'Password';
const email = 'email@email.com';
const testPassword = 'password';
const submitButtonText = 'Sign In';
const mockFirebaseUser = { uid: 'some_uid', email, emailVerified: true };
jest.mock('firebase/app', function() {
  const mockFirebaseAuth = {
    setPersistence: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
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

describe('Welcome screen test', () => {
  const store = initializeDomainLayer();
  const navigation = {
    navigate: jest.fn(),
  };
  test('should sign in the user', async () => {
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
    const signInButton = getByText(submitButtonText);

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
});
