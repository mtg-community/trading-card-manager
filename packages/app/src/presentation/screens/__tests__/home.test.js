import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { Home } from '../Home';
import { initializeDomainLayer } from '../../../domain';
import { MockedProvider } from '../../__mocks__/MockedProvider';

const emailInputPlaceholder = 'email';
const passwordInputPlaceholder = '********';
const testEmail = 'email@email.com';
const testPassword = 'password';

describe('Home screen test', () => {
  const store = initializeDomainLayer();
  test('should sign in the user', () => {
    const { getByPlaceholder } = render(
      <MockedProvider store={store}>
        <Home />
      </MockedProvider>,
    );

    const emailInput = getByPlaceholder(emailInputPlaceholder);
    const passwordInput = getByPlaceholder(passwordInputPlaceholder);

    fireEvent.changeText(emailInput, testEmail);
    fireEvent.changeText(passwordInput, testPassword);

    expect(emailInput.props.value).toEqual(testEmail);
    expect(passwordInput.props.value).toEqual(testPassword);
  });
});
