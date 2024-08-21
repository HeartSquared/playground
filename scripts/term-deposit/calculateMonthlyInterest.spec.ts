import { describe, expect, test } from 'vitest';
import { calculateMonthlyInterest } from './calculateMonthlyInterest';

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
