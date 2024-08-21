type CalculateAnnuallyInterestArgs = {
  // Whole dollars
  startAmount: number;
  interestRateDecimal: number;
  paymentsRemaining: number;
  totalInterest?: number;
};

export const calculateAnnuallyInterest = ({
  startAmount,
  interestRateDecimal,
  paymentsRemaining,
  totalInterest = 0,
}: CalculateAnnuallyInterestArgs): number => {
  const annualInterest = interestRateDecimal * (startAmount + totalInterest);

  if (paymentsRemaining > 1) {
    return calculateAnnuallyInterest({
      startAmount,
      interestRateDecimal,
      paymentsRemaining: paymentsRemaining - 1,
      totalInterest: totalInterest + annualInterest,
    });
  }

  return Number((totalInterest + annualInterest).toFixed(2));
};
