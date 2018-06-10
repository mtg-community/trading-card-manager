let Module = jest.mock('react-native-navigation');

Module.registerComponent = jest.fn();
Module.dismissModal = jest.fn();

const Mock = {
  Navigation: Module,
};

export default Mock;
export const Navigation = Module;
