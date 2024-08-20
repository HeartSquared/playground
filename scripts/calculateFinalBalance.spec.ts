import { describe, expect, test } from 'vitest';
import { calculateFinalBalance } from './calculateFinalBalance';

describe('calculateFinalBalance()', () => {
  describe('interest paid At Maturity', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateFinalBalance({
          startAmount: 10000,
          interestRateDecimal: 0.011,
          termYears: 3,
          interestPaid: 'at_maturity',
        }),
      ).toBe(10330);

      expect(
        calculateFinalBalance({
          startAmount: 200000,
          interestRateDecimal: 0.0235,
          termYears: 5,
          interestPaid: 'at_maturity',
        }),
      ).toBe(223500);
    });
  });

  describe('interest paid Annually', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateFinalBalance({
          startAmount: 10000,
          interestRateDecimal: 0.011,
          termYears: 3,
          interestPaid: 'annually',
        }),
      ).toBe(10334);

      expect(
        calculateFinalBalance({
          startAmount: 200000,
          interestRateDecimal: 0.0235,
          termYears: 5,
          interestPaid: 'annually',
        }),
      ).toBe(224631);
    });
  });

  describe('interest paid Quarterly', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateFinalBalance({
          startAmount: 10000,
          interestRateDecimal: 0.011,
          termYears: 3,
          interestPaid: 'quarterly',
        }),
      ).toBe(10335);

      expect(
        calculateFinalBalance({
          startAmount: 200000,
          interestRateDecimal: 0.0235,
          termYears: 5,
          interestPaid: 'quarterly',
        }),
      ).toBe(224859);
    });
  });

  describe('interest paid Monthly', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateFinalBalance({
          startAmount: 10000,
          interestRateDecimal: 0.011,
          termYears: 3,
          interestPaid: 'monthly',
        }),
      ).toBe(10335);

      expect(
        calculateFinalBalance({
          startAmount: 200000,
          interestRateDecimal: 0.0235,
          termYears: 5,
          interestPaid: 'monthly',
        }),
      ).toBe(224910);
    });
  });
});
