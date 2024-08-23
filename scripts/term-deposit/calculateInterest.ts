import { InterestPaidOptions } from './types';

type CalculateInterestArgs = {
  // Whole dollars
  startAmount: number;
  interestRateDecimal: number;
  paymentsRemaining: number;
  totalInterest?: number;
};

type InterestPeriod = Exclude<InterestPaidOptions, 'at_maturity'>;

const getInterestForPeriod = (
  interestPeriod: InterestPeriod,
  annualInterest: number,
): number => {
  switch (interestPeriod) {
    case 'annually':
      return annualInterest;
    case 'quarterly':
      return annualInterest / 4;
    case 'monthly':
      return annualInterest / 12;
  }
};

const calculateInterest =
  (interestPeriod: InterestPeriod) =>
  ({
    startAmount,
    interestRateDecimal,
    paymentsRemaining,
    totalInterest = 0,
  }: CalculateInterestArgs): number => {
    const annualInterest = interestRateDecimal * (startAmount + totalInterest);
    const interest = getInterestForPeriod(interestPeriod, annualInterest);

    if (paymentsRemaining > 1) {
      return calculateInterest(interestPeriod)({
        startAmount,
        interestRateDecimal,
        paymentsRemaining: paymentsRemaining - 1,
        totalInterest: totalInterest + interest,
      });
    }

    return Number((totalInterest + interest).toFixed(2));
  };

export const calculateMonthlyInterest = calculateInterest('monthly');
export const calculateQuarterlyInterest = calculateInterest('quarterly');
export const calculateAnnuallyInterest = calculateInterest('annually');
