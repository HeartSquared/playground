import { describe, expect, test } from 'vitest';
import { convertInterestRateToDecimal } from './convertInterestRateToDecimal.ts';

describe('convertInterestRateToDecimal()', () => {
  test('converts percentage value to float up to 4 decimals', () => {
    expect(convertInterestRateToDecimal(100)).toBe(1);
    expect(convertInterestRateToDecimal(10)).toBe(0.1);
    expect(convertInterestRateToDecimal(1)).toBe(0.01);
    expect(convertInterestRateToDecimal(1.1)).toBe(0.011);
    expect(convertInterestRateToDecimal(123.45)).toBe(1.2345);
    expect(convertInterestRateToDecimal(12.3)).toBe(0.123);
    expect(convertInterestRateToDecimal(1.23)).toBe(0.0123);
    expect(convertInterestRateToDecimal(0.12)).toBe(0.0012);
    expect(convertInterestRateToDecimal(0.01)).toBe(0.0001);
  });
});
