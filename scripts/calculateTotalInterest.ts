import { calculateAnnuallyInterest } from './calculateAnnuallyInterest';
import { calculateMonthlyInterest } from './calculateMonthlyInterest';
import { calculateQuarterlyInterest } from './calculateQuarterlyInterest';
import type { InterestPaidOptions } from './types';

type CalculateTotalInterestArgs = {
  // Whole dollars
  startAmount: number;
  interestRateDecimal: number;
  termYears: number;
  interestPaid: InterestPaidOptions;
};

export const calculateTotalInterest = ({
  startAmount,
  interestRateDecimal,
  termYears,
  interestPaid,
}: CalculateTotalInterestArgs): number => {
  switch (interestPaid) {
    case 'at_maturity': {
      const annualInterest = interestRateDecimal * startAmount;
      return Math.round(annualInterest * termYears);
    }
    case 'annually':
      return calculateAnnuallyInterest({
        startAmount,
        interestRateDecimal,
        paymentsRemaining: termYears,
      });
    case 'quarterly':
      return calculateQuarterlyInterest({
        startAmount,
        interestRateDecimal,
        paymentsRemaining: termYears * 4,
      });
    case 'monthly':
      return calculateMonthlyInterest({
        startAmount,
        interestRateDecimal,
        paymentsRemaining: termYears * 12,
      });
  }
};
