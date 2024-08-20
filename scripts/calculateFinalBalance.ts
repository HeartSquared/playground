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
    totalInterest = annualInterest * termYears;
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

  return Math.round(startAmount + totalInterest);
};
