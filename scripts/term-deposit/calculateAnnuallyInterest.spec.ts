import { describe, expect, test } from 'vitest';
import { calculateAnnuallyInterest } from './calculateAnnuallyInterest';

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
