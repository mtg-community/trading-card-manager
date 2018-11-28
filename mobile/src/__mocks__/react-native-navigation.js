let Module = jest.mock('react-native-navigation');

Module.registerComponent = jest.fn();
Module.pop = jest.fn();
Module.showModal = jest.fn();
Module.push = jest.fn();
Module.dismissModal = jest.fn();
Module.setRoot = jest.fn();

export const Navigation = Module;
