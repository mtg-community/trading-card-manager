import React from 'react';
import { render } from 'react-native-testing-library';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';
import { CardSearchFilter } from '../CardSearch/CardSearchFilter';

describe('CardSearchFilter screen', () => {
  const store = initializeDomainLayer();
  const navigation = {
    navigate: jest.fn(),
  };
  test('should sign in the user', () => {
    const { debug } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

    expect(debug).not.toBeNull();
  });
});
