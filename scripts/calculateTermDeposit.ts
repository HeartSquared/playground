import { calculateFinalBalance } from './calculateFinalBalance';
import { convertInterestRateToDecimal } from './convertInterestRateToDecimal';
import type { InterestPaidOptions } from './types';

type CalculateTermDepositArgs = {
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

  return calculateFinalBalance({
    startAmount,
    interestRateDecimal,
    termYears,
    interestPaid,
  });
};
