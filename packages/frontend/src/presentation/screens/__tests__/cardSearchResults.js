import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
} from 'react-native-testing-library';
import { CardSearchResults } from '../CardSearch/CardSearchResults';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';
import {
  BUY_BUTTON_LABEL,
  SELL_BUTTON_LABEL,
  TRADE_HAVE_BUTTON_LABEL,
  TRADE_WANT_BUTTON_LABEL,
} from '../../components/TradeListModal';

jest.mock('../../../data/graphql/queries/SampleCardList', () => {
  return {
    querySampleCardListFiltered: jest.fn(),
  };
});

const navigation = {
  navigate: jest.fn(),
};

const route = {
  params: {
    cardsFiltered: [
      {
        id: 'id1',
        name: 'Ajani, Inspiring Leader',
        text: 'text',
        manaCost: '{4}{W}{W}',
      },
      {
        id: 'id2',
        name: "Chandra, Flame's Fury",
        text: 'text',
        manaCost: '{4}{R}{R}',
      },
      {
        id: 'id3',
        name: 'Teferi, Hero of Dominaria',
        text: 'text',
        manaCost: '{3}{W}{U}',
      },
      {
        id: 'id4',
        name: "Sorin's Guide",
        text: 'text',
        manaCost: '{3}{B}{B}',
      },
    ],
  },
};

describe('CardResults Screen', () => {
  let store = initializeDomainLayer();

  beforeEach(() => {
    store = initializeDomainLayer();
    jest.clearAllMocks();
  });

  test('should add Ajani, Inspiring Leader card to trade_want list', async () => {
    const { getByText, getByProps } = render(
      <MockedProvider store={store}>
        <CardSearchResults navigation={navigation} route={route} />
      </MockedProvider>,
    );

    const ajaniCard = getByText('Ajani, Inspiring Leader');
    fireEvent(ajaniCard, 'onLongPress');

    const tradeWantButton = await waitForElement(() =>
      getByText(TRADE_WANT_BUTTON_LABEL),
    );
    fireEvent.press(tradeWantButton);

    const expectedState = {
      buy: [],
      sell: [],
      trade_want: ['id1'],
      trade_have: [],
    };
    await waitForElement(() =>
      expect(getByProps({ isVisible: true })).toBeTruthy(),
    );
    expect(store.getState().cardList.list).toEqual(expectedState);
  });

  test('should add Teferi, Hero of Dominaria card to trade_have list', async () => {
    const { getByText, getByProps } = render(
      <MockedProvider store={store}>
        <CardSearchResults navigation={navigation} route={route} />
      </MockedProvider>,
    );

    const teferiCard = getByText('Teferi, Hero of Dominaria');
    fireEvent(teferiCard, 'onLongPress');

    const tradeHaveButton = await waitForElement(() =>
      getByText(TRADE_HAVE_BUTTON_LABEL),
    );
    fireEvent.press(tradeHaveButton);

    const expectedState = {
      buy: [],
      sell: [],
      trade_want: [],
      trade_have: ['id3'],
    };
    await waitForElement(() =>
      expect(getByProps({ isVisible: true })).toBeTruthy(),
    );
    expect(store.getState().cardList.list).toEqual(expectedState);
  });

  test("should add Chandra, Flame's Fury card to buy list", async () => {
    const { getByText, getByProps } = render(
      <MockedProvider store={store}>
        <CardSearchResults navigation={navigation} route={route} />
      </MockedProvider>,
    );

    const chandraCard = getByText("Chandra, Flame's Fury");
    fireEvent(chandraCard, 'onLongPress');

    const buyButton = await waitForElement(() => getByText(BUY_BUTTON_LABEL));
    fireEvent.press(buyButton);

    const expectedState = {
      buy: ['id2'],
      sell: [],
      trade_want: [],
      trade_have: [],
    };
    await waitForElement(() =>
      expect(getByProps({ isVisible: true })).toBeTruthy(),
    );
    expect(store.getState().cardList.list).toEqual(expectedState);
  });

  test("should add Sorin's Guide card to sell list", async () => {
    const { getByText, getByProps } = render(
      <MockedProvider store={store}>
        <CardSearchResults navigation={navigation} route={route} />
      </MockedProvider>,
    );

    const chandraCard = getByText("Sorin's Guide");
    fireEvent(chandraCard, 'onLongPress');

    const sellButton = await waitForElement(() => getByText(SELL_BUTTON_LABEL));
    fireEvent.press(sellButton);

    const expectedState = {
      buy: [],
      sell: ['id4'],
      trade_want: [],
      trade_have: [],
    };
    await waitForElement(() =>
      expect(getByProps({ isVisible: true })).toBeTruthy(),
    );
    expect(store.getState().cardList.list).toEqual(expectedState);
  });
});
