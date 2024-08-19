import { convertInterestRateToDecimal } from './convertInterestRateToDecimal';

type CalculateTermDepositArgs = {
  // Whole dollars
  startAmount: number;
  // Percent per annum
  interestRate: number;
  // In years
  termYears: number;
  interestPaid: 'monthly' | 'quarterly' | 'annually' | 'at_maturity';
};

export const calculateTermDeposit = ({
  startAmount,
  interestRate,
  termYears,
  interestPaid,
}: CalculateTermDepositArgs): number => {
  const interestRateDecimal = convertInterestRateToDecimal(interestRate);
  const annualInterest = interestRateDecimal * startAmount;
  const totalInterest = annualInterest * termYears;
  return startAmount + totalInterest;
};
