import { describe, expect, test } from 'vitest';
import { calculateTermDeposit } from './calculateTermDeposit.ts';

describe('calculateTermDeposit()', () => {
  describe('interest paid At Maturity', () => {
    test('correctly calculates final balance', () => {
      // $10,000
      const startDepositAmount = 10000;
      // 1.10%
      const interestRate = 1.1;
      // 3 years = 36 months
      const investmentTerm = 36;
      // At Maturity
      const interestPaid = 'at_maturity';
      // Final balance $10,330
      const expected = 10330;

      expect(
        calculateTermDeposit({
          startAmount: startDepositAmount,
          interestRate,
          term: investmentTerm,
          interestPaid,
        }),
      ).toBe(expected);
    });
  });
});
