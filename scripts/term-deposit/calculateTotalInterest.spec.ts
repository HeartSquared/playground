import { describe, expect, test } from 'vitest';
import { calculateTotalInterest } from './calculateTotalInterest';

describe('calculateTotalInterest()', () => {
  describe('interest paid At Maturity', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateTotalInterest({
          startAmount: 10000,
          interestRateDecimal: 0.011,
          termYears: 3,
          interestPaid: 'at_maturity',
        }),
      ).toBe(330);

      expect(
        calculateTotalInterest({
          startAmount: 200000,
          interestRateDecimal: 0.0235,
          termYears: 5,
          interestPaid: 'at_maturity',
        }),
      ).toBe(23500);
    });
  });

  describe('interest paid Annually', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateTotalInterest({
          startAmount: 10000,
          interestRateDecimal: 0.011,
          termYears: 3,
          interestPaid: 'annually',
        }),
      ).toBe(333.64);

      expect(
        calculateTotalInterest({
          startAmount: 200000,
          interestRateDecimal: 0.0235,
          termYears: 5,
          interestPaid: 'annually',
        }),
      ).toBe(24630.76);
    });
  });

  describe('interest paid Quarterly', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateTotalInterest({
          startAmount: 10000,
          interestRateDecimal: 0.011,
          termYears: 3,
          interestPaid: 'quarterly',
        }),
      ).toBe(335.04);

      expect(
        calculateTotalInterest({
          startAmount: 200000,
          interestRateDecimal: 0.0235,
          termYears: 5,
          interestPaid: 'quarterly',
        }),
      ).toBe(24859);
    });
  });

  describe('interest paid Monthly', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateTotalInterest({
          startAmount: 10000,
          interestRateDecimal: 0.011,
          termYears: 3,
          interestPaid: 'monthly',
        }),
      ).toBe(335.35);

      expect(
        calculateTotalInterest({
          startAmount: 200000,
          interestRateDecimal: 0.0235,
          termYears: 5,
          interestPaid: 'monthly',
        }),
      ).toBe(24910.48);
    });
  });
});
