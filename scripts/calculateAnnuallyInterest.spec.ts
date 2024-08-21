import { describe, expect, test } from 'vitest';
import { calculateAnnuallyInterest } from './calculateAnnuallyInterest';

describe('calculateAnnuallyInterest()', () => {
  test('calculates interest for 1 quarter', () => {
    expect(
      calculateAnnuallyInterest({
        startAmount: 10000,
        interestRateDecimal: 0.011,
        paymentsRemaining: 1,
      }),
    ).toBe(27.5);
  });

  test('calculates interest for 2 quarters', () => {
    expect(
      calculateAnnuallyInterest({
        startAmount: 10000,
        interestRateDecimal: 0.011,
        paymentsRemaining: 2,
      }),
    ).toBe(55.08);
  });
});
