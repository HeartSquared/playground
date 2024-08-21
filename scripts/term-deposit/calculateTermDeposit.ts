import { calculateTotalInterest } from './calculateTotalInterest';
import { convertInterestRateToDecimal } from './convertInterestRateToDecimal';
import type { InterestPaidOptions } from './types';

export type CalculateTermDepositArgs = {
  // Whole dollars
  startAmount: number;
  // Percent per annum
  interestRate: number;
  termYears: number;
  interestPaid: InterestPaidOptions;
};

export const calculateTermDeposit = ({
  startAmount,
  interestRate,
  termYears,
  interestPaid,
}: CalculateTermDepositArgs): number => {
  const interestRateDecimal = convertInterestRateToDecimal(interestRate);

  const totalInterest = calculateTotalInterest({
    startAmount,
    interestRateDecimal,
    termYears,
    interestPaid,
  });

  return Math.round(startAmount + totalInterest);
};
