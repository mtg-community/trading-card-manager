// @flow

import _ from 'lodash';
import * as React from 'react';
import * as ReactNavigation from 'react-native-navigation';
import { SCREENS } from '../../screens';
import { initializeNavigation } from '../index';
import { setNavigationRoot } from '../listeners';
import * as ReduxIntegration from '../reduxIntegration';

jest.mock('react-native-navigation');
jest.mock('../reduxIntegration');
jest.mock('../listeners');

const mockRegisterAppLaunchedListener = jest.fn();

describe('Navigation initialization', () => {
  beforeAll(() => {
    (ReduxIntegration: any).withReduxProvider = jest.fn(
      (component: React.ComponentType<*>) => component,
    );
    ReactNavigation.Navigation.registerComponent = jest.fn();
    ReactNavigation.Navigation.events = () => ({
      registerAppLaunchedListener: mockRegisterAppLaunchedListener,
    });
    mockRegisterAppLaunchedListener.mockImplementation((callback: Function) =>
      callback(),
    );
  });

  it('should register all screens', () => {
    initializeNavigation();

    expect(ReactNavigation.Navigation.registerComponent).toHaveBeenCalledTimes(
      _.size(SCREENS),
    );
    _.forEach(SCREENS, screen => {
      const { route, component } = screen;
      expect(ReduxIntegration.withReduxProvider).toHaveBeenCalledWith(
        component,
      );
      expect(ReactNavigation.Navigation.registerComponent).toHaveBeenCalledWith(
        route,
        expect.any(Function),
      );
    });
  });

  it('should set navigation root', () => {
    expect(setNavigationRoot).toHaveBeenCalled();
    expect(mockRegisterAppLaunchedListener).toHaveBeenCalledWith(
      expect.any(Function),
    );
  });
});
