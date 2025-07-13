import { version } from '../index';

describe('CamelJS', () => {
  it('should export version', () => {
    expect(version).toBe('0.1.0');
  });
});
