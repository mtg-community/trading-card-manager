let Navigation = jest.mock('react-native-navigation');

Navigation.registerComponent = jest.fn();

export default Navigation;
