import browserslist from 'browserslist';
import config from './index';

describe('browserslist config', () => {
  test('should be an array', () => {
    expect(Array.isArray(config)).toBe(true);
  });

  test('should only contain valid queries', () => {
    expect(Array.isArray(browserslist(config))).toBe(true);
  });

  test('should have global browser coverage of at least 90%', () => {
    const coverage = browserslist.coverage(browserslist(config));

    expect(coverage).toBeGreaterThanOrEqual(90);
  });
});
