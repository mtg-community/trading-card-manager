import * as ReactNavigation from 'react-native-navigation';
import { setAppLayout } from '../layout';
jest.mock('react-native-navigation');

describe('Navigation Layout Smoke Test', () => {
  it('should set navigator root', async () => {
    await setAppLayout();
    expect(ReactNavigation.Navigation.setRoot).toHaveBeenCalled();
  });
});
