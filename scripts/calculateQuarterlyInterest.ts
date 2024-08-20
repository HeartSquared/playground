type CalculateQuarterlyInterestArgs = {
  // Whole dollars
  startAmount: number;
  interestRateDecimal: number;
  paymentsRemaining: number;
  totalInterest?: number;
};

export const calculateQuarterlyInterest = ({
  startAmount,
  interestRateDecimal,
  paymentsRemaining,
  totalInterest = 0,
}: CalculateQuarterlyInterestArgs): number => {
  const annualInterest = interestRateDecimal * (startAmount + totalInterest);
  const quarterlyInterest = annualInterest / 4;

  if (paymentsRemaining > 1) {
    return calculateQuarterlyInterest({
      startAmount,
      interestRateDecimal,
      paymentsRemaining: paymentsRemaining - 1,
      totalInterest: totalInterest + quarterlyInterest,
    });
  }

  return Math.round((totalInterest + quarterlyInterest) * 100) / 100;
};
