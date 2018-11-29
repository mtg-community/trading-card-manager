// @flow
declare var jest: any;

let Module = jest.mock('../index');

import configureMockStore from 'redux-mock-store';
import { Counter } from '../../../entities/counter';

const mockStore = configureMockStore();
export const state = { counter: new Counter(2), user: null };
export const store = mockStore(state);

export const configureStore = () => {
  return store;
};
