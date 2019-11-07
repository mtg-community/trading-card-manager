import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
} from 'react-native-testing-library';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';
import { CardSearchFilter } from '../CardSearch/CardSearchFilter';

jest.mock('../../../data/graphql/queries/SampleCardList', () => {
  return {
    querySampleCardList: jest.fn(() =>
      Promise.resolve([
        {
          id: 'id1',
          name: 'Ajani, Inspiring Leader',
          subTypes: ['Ajani'],
          superTypes: ['Legendary'],
        },
        {
          id: 'id2',
          name: "Chandra, Flame's Fury",
          subTypes: ['Chandra'],
          superTypes: ['Legendary'],
        },
        {
          id: 'id3',
          name: 'Teferi, Hero of Dominaria',
          subTypes: ['Teferi'],
          superTypes: ['Legendary'],
        },
      ]),
    ),
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
const SUBTYPE_INPUT_PLACEHOLDER = 'Sub(Type)';
const SUBTYPE_INPUT = 'Teferi';
const SUPERTYPE_INPUT_PLACEHOLDER = 'Super(Type)';
const SUPERTYPE_INPUT = 'Legendary';
const SEARCH_BUTTON_TEXT = 'Search';
const toHaveBeenCalledWith = 'CardSearchResults';

describe('CardSearchFilter screen', () => {
  const store = initializeDomainLayer();
  const navigation = {
    navigate: jest.fn(),
  };
  const { getByPlaceholder, getByText } = render(
    <MockedProvider store={store}>
      <CardSearchFilter navigation={navigation} />
    </MockedProvider>,
  );
  test('should search for cards and navigate to search result without any filter applied', async () => {
    const navigateParams = {
      cardsFiltered: [
        {
          id: 'id1',
          name: 'Ajani, Inspiring Leader',
          subTypes: ['Ajani'],
          superTypes: ['Legendary'],
        },
        {
          id: 'id2',
          name: "Chandra, Flame's Fury",
          subTypes: ['Chandra'],
          superTypes: ['Legendary'],
        },
        {
          id: 'id3',
          name: 'Teferi, Hero of Dominaria',
          subTypes: ['Teferi'],
          superTypes: ['Legendary'],
        },
      ],
    };
    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    const searchButton = getByText(SEARCH_BUTTON_TEXT);

    fireEvent.changeText(searchCardInput, SEARCH_INPUT);
    fireEvent.press(searchButton);

    expect(searchCardInput.props.value).toEqual(SEARCH_INPUT);
    await waitForElement(() =>
      expect(navigation.navigate).toHaveBeenCalledWith(
        toHaveBeenCalledWith,
        navigateParams,
      ),
    );
  });

  test('should search for cards and navigate to search result with filtered results', async () => {
    const navigateParams = {
      cardsFiltered: [
        {
          id: 'id3',
          name: 'Teferi, Hero of Dominaria',
          subTypes: ['Teferi'],
          superTypes: ['Legendary'],
        },
      ],
    };
    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    const subtypeInput = getByPlaceholder(SUBTYPE_INPUT_PLACEHOLDER);
    const supertypeInput = getByPlaceholder(SUPERTYPE_INPUT_PLACEHOLDER);
    const searchButton = getByText(SEARCH_BUTTON_TEXT);

    fireEvent.changeText(searchCardInput, SEARCH_INPUT);
    fireEvent.changeText(subtypeInput, SUBTYPE_INPUT);
    fireEvent.changeText(supertypeInput, SUPERTYPE_INPUT);
    fireEvent.press(searchButton);

    expect(searchCardInput.props.value).toEqual(SEARCH_INPUT);
    await waitForElement(() =>
      expect(navigation.navigate).toHaveBeenCalledWith(
        toHaveBeenCalledWith,
        navigateParams,
      ),
    );
  });
});
