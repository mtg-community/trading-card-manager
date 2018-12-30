import { User } from 'core';
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import * as FirebaseAuth from '../../data/firebase/authentication';
import { initializeDomainLayer } from '../../domain';
import { dispatch, select } from '../../domain/redux';
import {
  localeSelector,
  setLocaleAction,
} from '../../domain/redux/ducks/localeReducer';
import * as UserUseCases from '../../domain/useCases/user';
import { App } from '../App';
import { initializeInternalization } from '../internalization';
import { Router } from '../Router';
jest.mock('../../data/firebase/authentication');
jest.mock('../../domain/useCases/user');

let onAuthCallbackRef;
const mockUnsubscriber = jest.fn();
const mockOnAuthStateChanged = callback => {
  onAuthCallbackRef = callback;
  return mockUnsubscriber;
};

const { store } = initializeDomainLayer();
const { messages } = initializeInternalization();

describe('<App />', () => {
  let wrapper;

  beforeAll(() => {
    FirebaseAuth.onAuthStateChanged.mockImplementation(mockOnAuthStateChanged);
    wrapper = mount(
      <Provider store={store}>
        <App messages={messages} />
      </Provider>,
    );
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it('renders without crashing', () => {
    expect(wrapper).toExist();
  });

  it('renders the <Router />', () => {
    expect(wrapper.find(Router)).toExist();
  });

  it('updates user when they log in', () => {
    const testUser = new User('TEST_ID', 'TEST@TEST.TEST');
    onAuthCallbackRef(testUser);

    expect(UserUseCases.whenUserLogsIn).toHaveBeenCalledWith(testUser);
  });

  it('updates user when they log out', () => {
    onAuthCallbackRef(undefined);

    expect(UserUseCases.whenUserLogsOut).toHaveBeenCalled();
  });

  it('renders <IntlProvider /> correctly', () => {
    const provider = wrapper.find(IntlProvider);
    const locale = select(localeSelector);

    expect(provider).toExist();
    expect(provider.prop('messages')).toEqual(messages[locale]);
    expect(provider.prop('locale')).toEqual(locale);
    expect(provider.key()).toEqual(locale);
  });

  it('updates language when locale changes', () => {
    const ptBr = 'pt';
    dispatch(setLocaleAction(ptBr));
    wrapper.update();
    expect(wrapper.find(IntlProvider).prop('messages')).toEqual(messages[ptBr]);

    const eng = 'en';
    dispatch(setLocaleAction(eng));
    wrapper.update();
    expect(wrapper.find(IntlProvider).prop('messages')).toEqual(messages[eng]);
  });
});
