import { shallow } from 'enzyme';
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { withReduxProvider } from '../reduxIntegration';

const mockStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
};

jest.mock('domain', () => ({
  getStore: () => mockStore,
}));

const props = {
  foo: 'bar',
};

describe('React Navigation integration with Redux', () => {
  it('should wraps components on a Redux Provider', () => {
    const EnchancedComponent = withReduxProvider(View)();
    const wrapper = shallow(<EnchancedComponent {...props} />);
    const provider = wrapper.find(Provider);

    expect(provider).toExist();
    expect(wrapper).toContainReact(<View {...props} />);
    expect(provider).toHaveProp('store', mockStore);
  });

  it('should be a function that returns an component enhancer', () => {
    expect(withReduxProvider).toEqual(expect.any(Function));
    expect(withReduxProvider()).toEqual(expect.any(Function));
  });
});
