import { isTest, isDevelopment, isProduction } from '../environment';

describe('Environment', () => {
  it('returns false for non test environments', () => {
    expect(isDevelopment()).toBeFalsy();
    expect(isProduction()).toBeFalsy();
  });

  it('returns true for test environments', () => {
    expect(isTest()).toBeTruthy();
  });
});
