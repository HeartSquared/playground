import { describe, expect, test } from 'vitest';
import { calculateTermDeposit } from './calculateTermDeposit.ts';

// From brief:
// Start deposit amount: $10,000
// Interest rate: 1.10%
// Investment term: 3 years
// Interest paid: At Maturity
// Final balance: $10,330

describe('calculateTermDeposit()', () => {
  test('correctly calculates final balance', () => {
    expect(
      calculateTermDeposit({
        startAmount: 10000,
        interestRate: 1.1,
        termYears: 3,
        interestPaid: 'at_maturity',
      }),
    ).toBe(10330);
  });
});
