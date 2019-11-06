import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';
import { CardSearchFilter } from '../CardSearch/CardSearchFilter';

jest.mock('../../../data/graphql/queries/SampleCardList', () => {
  return {
    querySampleCardList: jest.fn(),
  };
});

jest.mock('../../Navigator', () => {
  return {
    ROUTES: {
      CARD_SEARCH_RESULTS: 'CardSearchResults',
    },
  };
});

const SEARCH_INPUT_PLACEHOLDER = 'Card Name';
const SEARCH_INPUT = 'Chandra';
const SEARCH_BUTTON_TEXT = 'Search'

describe('CardSearchFilter screen', () => {
  const store = initializeDomainLayer();
  const navigation = {
    navigate: jest.fn(),
  };
  test('should search for cards with filter options', () => {
    const { getByPlaceholder, getByText } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    // const searchButton = getByText(SEARCH_BUTTON_TEXT);

    fireEvent.changeText(searchCardInput, SEARCH_INPUT);
    // fireEvent.press(searchButton);

    expect(searchCardInput.props.value).toEqual(SEARCH_INPUT);
  });
});
