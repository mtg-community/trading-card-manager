import React from 'react';
import { Alert } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import { CardSearchResults } from '../CardSearch/CardSearchResults';
import { initializeDomainLayer } from '../../../domain/DomainLayer';
import { MockedProvider } from '../../__mocks__/MockedProvider';

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
    const { getByText } = render(
      <MockedProvider store={store}>
        <CardSearchResults navigation={navigation} route={route} />
      </MockedProvider>,
    );
    const alertSpy = jest.spyOn(Alert, 'alert');

    const ajaniCard = getByText('Ajani, Inspiring Leader');
    fireEvent(ajaniCard, 'onLongPress');

    const expectedState = {
      buy: [],
      sell: [],
      trade_want: ['id1'],
      trade_have: [],
    };
    expect(alertSpy).toHaveBeenCalled();
    Alert.alert.mock.calls[0][2][0].onPress();
    expect(store.getState().cardList.list).toEqual(expectedState);
  });

  test('should add Teferi, Hero of Dominaria card to trade_have list', async () => {
    const { getByText } = render(
      <MockedProvider store={store}>
        <CardSearchResults navigation={navigation} route={route} />
      </MockedProvider>,
    );
    const alertSpy = jest.spyOn(Alert, 'alert');

    const teferiCard = getByText('Teferi, Hero of Dominaria');
    fireEvent(teferiCard, 'onLongPress');

    const expectedState = {
      buy: [],
      sell: [],
      trade_want: [],
      trade_have: ['id3'],
    };
    expect(alertSpy).toHaveBeenCalled();
    Alert.alert.mock.calls[0][2][1].onPress();
    expect(store.getState().cardList.list).toEqual(expectedState);
  });

  test("should add Chandra, Flame's Fury card to trade_have list", async () => {
    const { getByText } = render(
      <MockedProvider store={store}>
        <CardSearchResults navigation={navigation} route={route} />
      </MockedProvider>,
    );
    const alertSpy = jest.spyOn(Alert, 'alert');

    const chandraCard = getByText("Chandra, Flame's Fury");
    fireEvent(chandraCard, 'onLongPress');

    const expectedState = {
      buy: ['id2'],
      sell: [],
      trade_want: [],
      trade_have: [],
    };
    expect(alertSpy).toHaveBeenCalled();
    Alert.alert.mock.calls[0][2][2].onPress();
    expect(store.getState().cardList.list).toEqual(expectedState);
  });
});
