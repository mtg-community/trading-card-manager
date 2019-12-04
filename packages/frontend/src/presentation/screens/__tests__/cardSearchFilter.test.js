import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
} from 'react-native-testing-library';
import { querySampleCardListFiltered } from '../../../data/graphql/queries/SampleCardList';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';
import { CardSearchFilter } from '../CardSearch/CardSearchFilter';
import { ROUTES } from '../../Navigator';
import {
  SEARCH_BUTTON_TEXT,
  SEARCH_INPUT_PLACEHOLDER,
  SUBTYPE_INPUT_PLACEHOLDER,
  SUPERTYPE_INPUT_PLACEHOLDER,
} from '../CardSearch/CardSearchFilterLayout';
import { Mana } from '../../../domain/entities/Mana';

const mockBackend = [
  {
    id: 'id1',
    name: 'Ajani, Inspiring Leader',
    subTypes: ['Ajani'],
    superTypes: ['Legendary'],
    colorIdentities: ['U', 'W'],
    colors: ['U', 'W'],
  },
  {
    id: 'id2',
    name: "Chandra, Flame's Fury",
    subTypes: ['Chandra'],
    superTypes: ['Legendary'],
    colorIdentities: ['R'],
    colors: ['R'],
  },
  {
    id: 'id3',
    name: 'Teferi, Hero of Dominaria',
    subTypes: ['Teferi'],
    superTypes: ['Legendary'],
    colorIdentities: ['W'],
    colors: ['W'],
  },
];

const SEARCH_INPUT = 'Chandra';
const SUBTYPE_INPUT = 'Teferi';
const SUPERTYPE_INPUT = 'Legendary';
const WHITE_MANA_COLOR_TEXT = new Mana('W').toSymbol();
const toHaveBeenCalledWith = 'CardSearchResults';
const whiteManaComponentProps = {
  color: 'W',
};
const activeFilterComponentProps = {
  testID: 'ActiveFilters',
};

jest.mock('../../../data/graphql/queries/SampleCardList', () => {
  return {
    querySampleCardListFiltered: jest.fn(() => Promise.resolve(mockBackend)),
  };
});

const navigation = {
  navigate: jest.fn(),
};

describe('CardSearchFilter screen', () => {
  let store = initializeDomainLayer();

  beforeEach(() => {
    store = initializeDomainLayer();
    jest.clearAllMocks();
  });

  test('should search for cards and navigate to search result with cardName filter applied', async () => {
    const { getByPlaceholder, getByText, getByProps } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    const searchButton = getByText(SEARCH_BUTTON_TEXT);
    const activeFilters = getByProps(activeFilterComponentProps);
    const expectedFilter = {
      cardName: SEARCH_INPUT,
      subtype: '',
      supertype: '',
      colors: [],
      colorIdentities: [],
    };

    fireEvent.changeText(searchCardInput, SEARCH_INPUT);
    fireEvent.press(searchButton);

    expect(searchCardInput.props.value).toEqual(SEARCH_INPUT);
    expect(activeFilters.props.activefilters).toEqual(expectedFilter);
    expect(querySampleCardListFiltered).toHaveBeenCalledWith(expectedFilter),
      await waitForElement(() =>
        expect(navigation.navigate).toHaveBeenCalledWith(
          ROUTES.CARD_SEARCH_RESULTS,
          { cardsFiltered: mockBackend },
        ),
      );
  });

  test('should search for cards and navigate to search result filtered by subtype and supertype', async () => {
    const navigateParams = {
      cardsFiltered: mockBackend,
    };
    const { getByPlaceholder, getByText, getByProps } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    const subtypeInput = getByPlaceholder(SUBTYPE_INPUT_PLACEHOLDER);
    const supertypeInput = getByPlaceholder(SUPERTYPE_INPUT_PLACEHOLDER);
    const searchButton = getByText(SEARCH_BUTTON_TEXT);
    const activeFilters = getByProps(activeFilterComponentProps);
    const expectedFilter = {
      cardName: SEARCH_INPUT,
      subtype: SUBTYPE_INPUT,
      supertype: SUPERTYPE_INPUT,
      colors: [],
      colorIdentities: [],
    };

    fireEvent.changeText(searchCardInput, SEARCH_INPUT);
    fireEvent.changeText(subtypeInput, SUBTYPE_INPUT);
    fireEvent.changeText(supertypeInput, SUPERTYPE_INPUT);
    fireEvent.press(searchButton);

    expect(searchCardInput.props.value).toEqual(SEARCH_INPUT);
    expect(activeFilters.props.activefilters).toEqual(expectedFilter);
    expect(querySampleCardListFiltered).toHaveBeenCalledWith(expectedFilter);
    await waitForElement(() =>
      expect(navigation.navigate).toHaveBeenCalledWith(
        toHaveBeenCalledWith,
        navigateParams,
      ),
    );
  });

  test('should search for cards and navigate to search result filtered by color', async () => {
    const navigateParams = {
      cardsFiltered: mockBackend,
    };
    const {
      getByPlaceholder,
      getByText,
      getAllByText,
      getAllByProps,
      getByProps,
    } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    const searchButton = getByText(SEARCH_BUTTON_TEXT);
    const [whiteManaColorCheckbox, whiteManaIdentityCheckbox] = getAllByProps(
      whiteManaComponentProps,
    );
    const [manaColorCheckbox, manaIndentityCheckbox] = getAllByText(
      WHITE_MANA_COLOR_TEXT,
    );
    const activeFilters = getByProps(activeFilterComponentProps);

    const expectedFilter = {
      cardName: SEARCH_INPUT,
      subtype: '',
      supertype: '',
      colors: ['W'],
      colorIdentities: ['W'],
    };

    fireEvent.changeText(searchCardInput, SEARCH_INPUT);
    fireEvent.press(manaColorCheckbox);
    fireEvent.press(manaIndentityCheckbox);
    fireEvent.press(searchButton);

    expect(searchCardInput.props.value).toEqual(SEARCH_INPUT);
    expect(whiteManaColorCheckbox.props.isSelected).toEqual(true);
    expect(whiteManaIdentityCheckbox.props.isSelected).toEqual(true);
    expect(activeFilters.props.activefilters).toEqual(expectedFilter);
    expect(querySampleCardListFiltered).toHaveBeenCalledWith(expectedFilter);
    await waitForElement(() =>
      expect(navigation.navigate).toHaveBeenCalledWith(
        toHaveBeenCalledWith,
        navigateParams,
      ),
    );
  });
});
