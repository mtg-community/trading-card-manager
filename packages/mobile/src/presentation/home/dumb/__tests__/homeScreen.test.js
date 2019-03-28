// @flow strict

import React from 'react';
import { shallow } from 'enzyme';

import { HomeContainer } from '../../homeScreen';
import { Home } from '../home';

import { Navigator } from '../../../shared/navigation';
jest.mock('../../../shared/navigation');
jest.mock('../../../../__mocks__/react-native-splash-screen');

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
