// @flow
let Module = jest.mock('../index');

import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
export const state = { counter: 2, user: null };
export const store = mockStore(state);

export const configureStore = () => {
  return store;
};
