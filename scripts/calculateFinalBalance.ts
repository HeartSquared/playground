import { calculateMonthlyInterest } from './calculateMonthlyInterest';
import { calculateQuarterlyInterest } from './calculateQuarterlyInterest';
import type { InterestPaidOptions } from './types';

type CalculateFinalBalanceArgs = {
  // Whole dollars
  startAmount: number;
  interestRateDecimal: number;
  termYears: number;
  interestPaid: InterestPaidOptions;
  total?: number;
};

export const calculateFinalBalance = ({
  startAmount,
  interestRateDecimal,
  termYears,
  interestPaid,
  total = 0,
}: CalculateFinalBalanceArgs): number => {
  let totalInterest = total;

  if (interestPaid === 'at_maturity') {
    const annualInterest = interestRateDecimal * startAmount;
    totalInterest = Math.round(annualInterest * termYears);
  }

  if (interestPaid === 'annually') {
    const annualInterest = interestRateDecimal * (startAmount + totalInterest);
    totalInterest += annualInterest;

    if (termYears > 1) {
      return calculateFinalBalance({
        startAmount,
        interestRateDecimal,
        termYears: termYears - 1,
        interestPaid,
        total: totalInterest,
      });
    }
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
