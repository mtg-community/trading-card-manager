import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import { MTGState } from '../DomainLayer';
import { EMPTY_IN_CARD_LIST, CardList } from '../entities/CardList';

export enum listTypes {
  BUY = 'buy',
  SELL = 'sell',
  TRADE_WANT = 'trade_want',
  TRADE_HAVE = 'trade_have',
}

type UpdateListActionType = {
  listType: listTypes;
  cardId: string;
};

export type CardListActionsType = PayloadAction<UpdateListActionType>;

interface AlertType {
  showAlert: boolean;
  message: string;
}

export interface CardListState {
  list: CardList;
  alert: AlertType;
  isLoading: boolean;
}

export const NO_ALERTS: AlertType = { showAlert: false, message: '' };

export const CARD_LIST_INITIAL_STATE: CardListState = {
  list: EMPTY_IN_CARD_LIST,
  alert: NO_ALERTS,
  isLoading: false,
};

export const cardListSelector = (state: MTGState): CardListState =>
  state.cardList;

export const setLoading = createAction<boolean>('duck/cardList/setLoading');
export const updateList = createAction<UpdateListActionType>(
  'duck/cardList/updateUser',
);
export const showAlert = createAction<string>('duck/cardList/showAlert');

export function handleUpdateList(
  state: CardListState,
  action: PayloadAction<UpdateListActionType>,
): CardListState {
  const { listType, cardId } = action.payload;
  return {
    ...state,
    list: {
      ...state.list,
      [listType]: state.list[listType].concat(cardId),
    },
  };
}

export function handleShowAlert(
  state: CardListState,
  action: PayloadAction<string>,
): CardListState {
  return {
    ...state,
    alert: {
      showAlert: true,
      message: action.payload,
    },
  };
}

export function handleSetLoading(
  state: CardListState,
  action: PayloadAction<boolean>,
): CardListState {
  return {
    ...state,
    isLoading: action.payload,
  };
}

export const cardListReducer: Reducer<
  CardListState,
  CardListActionsType
> = createReducer(CARD_LIST_INITIAL_STATE, {
  [updateList.type]: handleUpdateList,
  [showAlert.type]: handleShowAlert,
  [setLoading.type]: handleSetLoading,
});
