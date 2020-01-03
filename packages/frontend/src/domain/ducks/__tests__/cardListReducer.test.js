import { initializeDomainLayer } from '../../DomainLayer';
import { CardList } from '../../entities';
import { showAlert, updateList, listTypes } from '../cardListReducer';

describe('Cardlist Reducer', () => {
  let store = initializeDomainLayer();
  let action;

  beforeEach(() => {
    store = initializeDomainLayer();
  });

  it('should initialize as a empty list if no user has logged in', () => {
    const list = new CardList();
    const expectedState = {
      list,
      alert: {
        showAlert: false,
        message: '',
      },
      isLoading: false,
    };
    expect(store.getState().cardList).toEqual(expectedState);
  });

  it('should update the list of an authenticated user', () => {
    action = updateList({ listType: listTypes.TRADE_WANT, cardId: 'cardId' });
    const expectedState = {
      buy: [],
      sell: [],
      trade_have: [],
      trade_want: ['cardId'],
    };
    store.dispatch(action);
    expect(store.getState().cardList.list).toEqual(expectedState);
  });

  it('should show an error message when auth goes wrong', () => {
    const expectedState = {
      showAlert: true,
      message: 'List not found',
    };
    action = showAlert('List not found');
    store.dispatch(action);
    expect(store.getState().cardList.alert).toEqual(expectedState);
  });
});
