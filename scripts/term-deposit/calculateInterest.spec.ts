import { describe, expect, test } from 'vitest';
import {
  calculateAnnuallyInterest,
  calculateMonthlyInterest,
  calculateQuarterlyInterest,
} from './calculateInterest';

describe('calculateAnnuallyInterest()', () => {
  test('calculates interest for 1 year', () => {
    expect(
      calculateAnnuallyInterest({
        startAmount: 10000,
        interestRateDecimal: 0.011,
        paymentsRemaining: 1,
      }),
    ).toBe(110);
  });

  test('calculates interest for 2 years', () => {
    expect(
      calculateAnnuallyInterest({
        startAmount: 10000,
        interestRateDecimal: 0.011,
        paymentsRemaining: 2,
      }),
    ).toBe(221.21);
  });
});

describe('calculateQuarterlyInterest()', () => {
  test('calculates interest for 1 quarter', () => {
    expect(
      calculateQuarterlyInterest({
        startAmount: 10000,
        interestRateDecimal: 0.011,
        paymentsRemaining: 1,
      }),
    ).toBe(27.5);
  });

  test('calculates interest for 2 quarters', () => {
    expect(
      calculateQuarterlyInterest({
        startAmount: 10000,
        interestRateDecimal: 0.011,
        paymentsRemaining: 2,
      }),
    ).toBe(55.08);
  });
});

describe('calculateMonthlyInterest()', () => {
  test('calculates interest for 1 month', () => {
    expect(
      calculateMonthlyInterest({
        startAmount: 10000,
        interestRateDecimal: 0.011,
        paymentsRemaining: 1,
      }),
    ).toBe(9.17);
  });

  test('calculates interest for 2 months', () => {
    expect(
      calculateMonthlyInterest({
        startAmount: 10000,
        interestRateDecimal: 0.011,
        paymentsRemaining: 2,
      }),
    ).toBe(18.34);
  });
});
