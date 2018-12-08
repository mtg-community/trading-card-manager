// @flow strict

import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'core/src/frameworks/redux/__mocks__/stateMock';
import {
  decrementCounterAction,
  incrementCounterAction,
} from 'core/src/frameworks/redux';

import { HomeScreen, HomeContainer } from '../../homeScreen';
import { Home } from '../home';

import { Navigator } from '../../../shared/navigation';
jest.mock('../../../shared/navigation');

describe('<HomeScreen />', () => {
  describe('react-redux connection', () => {
    const wrapper = shallow(<HomeScreen store={store} />);

    xit('should map state to props', () => {
      expect(wrapper.prop('counter')).toEqual(2);
    });

    xit('should map dispatch to props', () => {
      wrapper.prop('increment')();
      expect(store.getActions()).toContainEqual(incrementCounterAction());

      wrapper.prop('decrement')();
      expect(store.getActions()).toContainEqual(decrementCounterAction());
    });
  });
});

describe('<HomeContainer />', () => {
  const props = {
    decrement: jest.fn(),
    increment: jest.fn(),
    logOut: jest.fn(),
    navigator: new Navigator('id'),
    counter: 1,
    user: null,
  };
  const wrapper = shallow(<HomeContainer {...props} />);
  const component = wrapper.find(Home);

  it('should pass props correctly to <Home />', () => {
    const homeProps = component.props();
    expect(homeProps.decrement).toEqual(props.decrement);
    expect(homeProps.increment).toEqual(props.increment);
    expect(homeProps.counter).toEqual(props.counter);
    expect(homeProps.instructions).toBeTruthy();
  });
});
