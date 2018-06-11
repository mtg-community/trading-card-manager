// @flow strict

import React from 'react';
import { shallow } from 'enzyme';

import { HomeScreen, HomeContainer } from '../../homeScreen';
import { Home } from '../home';
import {
  incrementCounter,
  decrementCounter,
  selectCounter,
} from '../../../../redux/ducks/counter';
import { state, store } from '../../../../redux/__mocks__/index';
import { Navigator } from '../../../../navigation';
jest.mock('../../../../navigation');

describe('<HomeScreen />', () => {
  describe('react-redux connection', () => {
    const wrapper = shallow(<HomeScreen store={store} />);
    const container = wrapper.find(HomeContainer);

    it('should map state to props', () => {
      expect(wrapper.prop('counter')).toEqual(selectCounter(state));
    });

    it('should map dispatch to props', () => {
      wrapper.prop('increment')();
      expect(store.getActions()).toContainEqual(incrementCounter());

      wrapper.prop('decrement')();
      expect(store.getActions()).toContainEqual(decrementCounter());
    });
  });
});

describe('<HomeContainer />', () => {
  const props = {
    decrement: jest.fn(),
    increment: jest.fn(),
    navigator: new Navigator('id'),
    counter: 1,
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
