import { calculateAnnuallyInterest } from './calculateAnnuallyInterest';
import { calculateMonthlyInterest } from './calculateMonthlyInterest';
import { calculateQuarterlyInterest } from './calculateQuarterlyInterest';
import type { InterestPaidOptions } from './types';

type CalculateFinalBalanceArgs = {
  // Whole dollars
  startAmount: number;
  interestRateDecimal: number;
  termYears: number;
  interestPaid: InterestPaidOptions;
};

export const calculateFinalBalance = ({
  startAmount,
  interestRateDecimal,
  termYears,
  interestPaid,
}: CalculateFinalBalanceArgs): number => {
  let totalInterest = 0;

  if (interestPaid === 'at_maturity') {
    const annualInterest = interestRateDecimal * startAmount;
    totalInterest = Math.round(annualInterest * termYears);
  }

  if (interestPaid === 'annually') {
    totalInterest += calculateAnnuallyInterest({
      startAmount,
      interestRateDecimal,
      paymentsRemaining: termYears,
    });
  }

  if (interestPaid === 'quarterly') {
    totalInterest += calculateQuarterlyInterest({
      startAmount,
      interestRateDecimal,
      paymentsRemaining: termYears * 4,
    });
  }

  if (interestPaid === 'monthly') {
    totalInterest += calculateMonthlyInterest({
      startAmount,
      interestRateDecimal,
      paymentsRemaining: termYears * 12,
    });
  }

  return Math.round(startAmount + totalInterest);
};
