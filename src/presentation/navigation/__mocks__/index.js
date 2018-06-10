let Module = jest.mock('../index');

const mockClass = {
  navigateBack: jest.fn(),
  navigateTo: jest.fn(),
  dismissModal: jest.fn(),
};

export const Navigator = jest.fn(() => mockClass);
