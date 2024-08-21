import { describe, expect, test } from 'vitest';
import { convertInterestRateToDecimal } from './convertInterestRateToDecimal.ts';

describe('convertInterestRateToDecimal()', () => {
  test('converts whole numbers', () => {
    expect(convertInterestRateToDecimal(100)).toBe(1);
    expect(convertInterestRateToDecimal(10)).toBe(0.1);
    expect(convertInterestRateToDecimal(1)).toBe(0.01);
  });

  test('converts numbers with 1 decimal place', () => {
    expect(convertInterestRateToDecimal(1.1)).toBe(0.011);
    expect(convertInterestRateToDecimal(12.3)).toBe(0.123);
  });

  test('converts numbers with 2 decimal places', () => {
    expect(convertInterestRateToDecimal(123.45)).toBe(1.2345);
    expect(convertInterestRateToDecimal(1.23)).toBe(0.0123);
    expect(convertInterestRateToDecimal(0.12)).toBe(0.0012);
    expect(convertInterestRateToDecimal(0.01)).toBe(0.0001);
  });
});
