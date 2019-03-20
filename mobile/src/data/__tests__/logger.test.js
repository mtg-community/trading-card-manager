// @flow

import { Logger } from '../logger';

const mockStdout = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Logger', () => {
  const message = 'Any message';
  beforeEach(() => {
    Logger.stdout = mockStdout;
  });

  it('shows logs based on stdout', async () => {
    Logger.log(message);
    expect(mockStdout.log).toHaveBeenCalledWith(message);
  });

  it('shows warnings based on stdout', async () => {
    Logger.warn(message);
    expect(mockStdout.warn).toHaveBeenCalledWith(message);
  });
});
