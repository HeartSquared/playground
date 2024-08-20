import { describe, expect, test } from 'vitest';
import { calculateQuarterlyInterest } from './calculateQuarterlyInterest';

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
