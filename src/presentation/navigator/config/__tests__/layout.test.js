import * as ReactNavigation from 'react-native-navigation';
import { setNavigationRoot } from '../layout';
jest.mock('react-native-navigation');

describe('Navigation Layout Smoke Test', () => {
  it('should set navigator root', async () => {
    await setNavigationRoot();
    expect(ReactNavigation.Navigation.setRoot).toHaveBeenCalled();
  });
});
