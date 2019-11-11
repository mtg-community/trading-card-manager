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
jest.mock('../../../data/graphql/queries/SampleCardList', () => {
  return {
    querySampleCardList: jest.fn(() => Promise.resolve(mockBackend)),
  };
});

const SEARCH_INPUT_PLACEHOLDER = 'Card Name';
const SEARCH_INPUT = 'Chandra';
const SUBTYPE_INPUT_PLACEHOLDER = 'Sub(Type)';
const SUBTYPE_INPUT = 'Teferi';
const SUPERTYPE_INPUT_PLACEHOLDER = 'Super(Type)';
const SUPERTYPE_INPUT = 'Legendary';
const SEARCH_BUTTON_TEXT = 'Search';
const WHITE_MANA_COLOR_CHECKBOX_ACCESSIBILITY_HINT = 'manaColorCheckboxColor:W';

const toHaveBeenCalledWith = 'CardSearchResults';

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
    const { getByPlaceholder, getByText, getByA11yHint, debug } = render(
      <MockedProvider store={store}>
        <CardSearchFilter navigation={navigation} />
      </MockedProvider>,
    );

    const searchCardInput = getByPlaceholder(SEARCH_INPUT_PLACEHOLDER);
    const searchButton = getByText(SEARCH_BUTTON_TEXT);

    debug();
    const manaColorCheckbox = await waitForElement(() =>
      getByA11yHint(WHITE_MANA_COLOR_CHECKBOX_ACCESSIBILITY_HINT),
    );

    fireEvent.changeText(searchCardInput, SEARCH_INPUT);
    fireEvent.press(searchButton);
    fireEvent.press(manaColorCheckbox);

    expect(searchCardInput.props.value).toEqual(SEARCH_INPUT);
    await waitForElement(() =>
      expect(manaColorCheckbox.props.isSelected).toBeTruthy(),
    );
    await waitForElement(() =>
      expect(navigation.navigate).toHaveBeenCalledWith(
        toHaveBeenCalledWith,
        navigateParams,
      ),
    );
  });
});
