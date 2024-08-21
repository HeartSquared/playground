import { describe, expect, test } from 'vitest';
import { calculateTermDeposit } from './calculateTermDeposit.ts';

// From brief:
// Start deposit amount: $10,000
// Interest rate: 1.10%
// Investment term: 3 years
// Interest paid: At Maturity
// Final balance: $10,330

describe('calculateTermDeposit()', () => {
  describe('interest paid At Maturity', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateTermDeposit({
          startAmount: 10000,
          interestRate: 1.1,
          termYears: 3,
          interestPaid: 'at_maturity',
        }),
      ).toBe(10330);

      expect(
        calculateTermDeposit({
          startAmount: 200000,
          interestRate: 2.35,
          termYears: 5,
          interestPaid: 'at_maturity',
        }),
      ).toBe(223500);
    });
  });

  describe('interest paid Annually', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateTermDeposit({
          startAmount: 10000,
          interestRate: 1.1,
          termYears: 3,
          interestPaid: 'annually',
        }),
      ).toBe(10334);

      expect(
        calculateTermDeposit({
          startAmount: 200000,
          interestRate: 2.35,
          termYears: 5,
          interestPaid: 'annually',
        }),
      ).toBe(224631);
    });
  });

  describe('interest paid Quarterly', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateTermDeposit({
          startAmount: 10000,
          interestRate: 1.1,
          termYears: 3,
          interestPaid: 'quarterly',
        }),
      ).toBe(10335);

      expect(
        calculateTermDeposit({
          startAmount: 200000,
          interestRate: 2.35,
          termYears: 5,
          interestPaid: 'quarterly',
        }),
      ).toBe(224859);
    });
  });

  describe('interest paid Monthly', () => {
    test('correctly calculates final balance', () => {
      expect(
        calculateTermDeposit({
          startAmount: 10000,
          interestRate: 1.1,
          termYears: 3,
          interestPaid: 'monthly',
        }),
      ).toBe(10335);

      expect(
        calculateTermDeposit({
          startAmount: 200000,
          interestRate: 2.35,
          termYears: 5,
          interestPaid: 'monthly',
        }),
      ).toBe(224910);
    });
  });
});
