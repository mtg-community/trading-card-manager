// @flow

import _ from 'lodash';
import Navigation from 'react-native-navigation';
import { SCREENS } from '../../screens';
import { initializeNavigation } from '../index';

jest.mock('../listeners');
jest.mock('../reduxIntegration');
jest.mock('react-native-navigation');

describe('Navigation initialization', () => {
  // TODO: Resolver mocks manuais para testar isto
  xit('should register all screens', () => {
    initializeNavigation();

    expect(Navigation.registerComponent).toHaveBeenCalledTimes(_.size(SCREENS));
    _.forEach(SCREENS, screen => {
      expect(Navigation.registerComponent).toHaveBeenCalledWith(screen.route);
    });
  });
});
