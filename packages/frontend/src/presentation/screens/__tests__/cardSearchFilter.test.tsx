import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  act,
} from 'react-native-testing-library';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';
import {
  CardSearchFilter,
  CardSearchFilterNavigationParams,
} from '../CardSearch/CardSearchFilter';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { ROUTES } from '../../Navigator';
import {
  SEARCH_BUTTON_TEXT,
  SEARCH_INPUT_PLACEHOLDER,
  SUBTYPE_INPUT_PLACEHOLDER,
  SUPERTYPE_INPUT_PLACEHOLDER,
} from '../CardSearch/CardSearchFilterLayout';

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
const WHITE_MANA_COLOR_COLOR_CHECKBOX_ID = 'manaColorCheckBox:W';
const toHaveBeenCalledWith = 'CardSearchResults';

jest.mock('../../../data/graphql/queries/SampleCardList', () => {
  return {
    querySampleCardList: jest.fn(() => Promise.resolve(mockBackend)),
  };
});

const navigation: NavigationScreenProp<
  NavigationState,
  CardSearchFilterNavigationParams
> = {
  navigate: jest.fn(),
  dismiss: jest.fn(),
  goBack: jest.fn(),
  openDrawer: jest.fn(),
  closeDrawer: jest.fn(),
  toggleDrawer: jest.fn(),
  getParam: jest.fn(),
  setParams: jest.fn(),
  dispatch: jest.fn(),
  emit: jest.fn(),
  addListener: jest.fn(),
  isFocused: jest.fn(),
  isFirstRouteInParent: jest.fn(),
  dangerouslyGetParent: jest.fn(),
  state: {} as NavigationState,
};

describe('CardSearchFilter screen', () => {
  let store = initializeDomainLayer();

  beforeEach(() => {
    store = initializeDomainLayer();
    jest.clearAllMocks();
  });

  test('should search for cards and navigate to search result without any filter applied', async () => {
    const { getByPlaceholder, getByText } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    const searchButton = getByText(SEARCH_BUTTON_TEXT);

    act(() => {
      fireEvent.changeText(searchCardInput, SEARCH_INPUT);
      fireEvent.press(searchButton);
    });

    await waitForElement(() =>
      expect(navigation.navigate).toHaveBeenCalledWith(
        ROUTES.CARD_SEARCH_RESULTS,
        { cardsFiltered: mockBackend },
      ),
    );
  });

  test('should search for cards and navigate to search result filtered by subtype and supertype', async () => {
    const navigateParams = {
      cardsFiltered: [
        {
          id: 'id3',
          name: 'Teferi, Hero of Dominaria',
          subTypes: ['Teferi'],
          superTypes: ['Legendary'],
          colorIdentities: ['W'],
          colors: ['W'],
        },
      ],
    };
    const { getByPlaceholder, getByText } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

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

  test('should search for cards and navigate to search result filtered by color', async () => {
    const navigateParams = {
      cardsFiltered: [
        {
          id: 'id1',
          name: 'Ajani, Inspiring Leader',
          subTypes: ['Ajani'],
          superTypes: ['Legendary'],
          colorIdentities: ['U', 'W'],
          colors: ['U', 'W'],
        },
        {
          id: 'id3',
          name: 'Teferi, Hero of Dominaria',
          subTypes: ['Teferi'],
          superTypes: ['Legendary'],
          colorIdentities: ['W'],
          colors: ['W'],
        },
      ],
    };
    const { getByPlaceholder, getByText, getAllByTestId } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    const searchButton = getByText(SEARCH_BUTTON_TEXT);
    const [manaColorCheckbox, manaIndentityCheckbox] = getAllByTestId(
      WHITE_MANA_COLOR_COLOR_CHECKBOX_ID,
    );

    fireEvent.changeText(searchCardInput, SEARCH_INPUT);
    fireEvent.press(searchButton);
    fireEvent.press(manaColorCheckbox);
    fireEvent.press(manaIndentityCheckbox);

    expect(searchCardInput.props.value).toEqual(SEARCH_INPUT);
    await waitForElement(() =>
      expect(manaColorCheckbox.props.isSelected).toEqual(true),
    );
    await waitForElement(() =>
      expect(manaIndentityCheckbox.props.isSelected).toEqual(true),
    );
    await waitForElement(() =>
      expect(navigation.navigate).toHaveBeenCalledWith(
        toHaveBeenCalledWith,
        navigateParams,
      ),
    );
  });
});
