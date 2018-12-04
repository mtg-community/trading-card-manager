// @flow

import _ from 'lodash';
import * as React from 'react';
import * as ReactNavigation from 'react-native-navigation';
import { SCREENS } from 'presentation/screens';
import { initializeNavigator } from '../initializeNavigator';
import { setAppLayout } from '../layout';
import * as ReduxIntegration from '../../helpers/reduxIntegration';

jest.mock('react-native-navigation');
jest.mock('../helpers/reduxIntegration');
jest.mock('../layout');

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
    initializeNavigator();

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

  it('should set navigator root', () => {
    expect(setAppLayout).toHaveBeenCalled();
    expect(mockRegisterAppLaunchedListener).toHaveBeenCalledWith(
      expect.any(Function),
    );
  });
});
