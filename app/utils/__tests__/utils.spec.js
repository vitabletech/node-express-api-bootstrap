import { testFunction } from '../utils.js';

describe('testFunction', () => {
  it('should log a message', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    testFunction();
    expect(consoleSpy).toHaveBeenCalledWith('This is a test function');
    consoleSpy.mockRestore();
  });
});