import * as ReactNavigation from 'react-native-navigation';
import { setNavigationRoot } from '../listeners';
jest.mock('react-native-navigation');

describe('Navigation Listeners Smoke Test', () => {
  it('should set navigation root', async () => {
    await setNavigationRoot();
    expect(ReactNavigation.Navigation.setRoot).toHaveBeenCalled();
  });
});
