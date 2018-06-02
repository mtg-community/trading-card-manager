// @flow

import configureStore from 'redux-mock-store';

const mockStore = configureStore();
export const state = { counter: 2, user: null };
export const store = mockStore(state);
