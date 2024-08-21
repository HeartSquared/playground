type CalculateMonthlyInterestArgs = {
  // Whole dollars
  startAmount: number;
  interestRateDecimal: number;
  paymentsRemaining: number;
  totalInterest?: number;
};

export const calculateMonthlyInterest = ({
  startAmount,
  interestRateDecimal,
  paymentsRemaining,
  totalInterest = 0,
}: CalculateMonthlyInterestArgs): number => {
  const annualInterest = interestRateDecimal * (startAmount + totalInterest);
  const monthlyInterest = annualInterest / 12;

  if (paymentsRemaining > 1) {
    return calculateMonthlyInterest({
      startAmount,
      interestRateDecimal,
      paymentsRemaining: paymentsRemaining - 1,
      totalInterest: totalInterest + monthlyInterest,
    });
  }

  return Number((totalInterest + monthlyInterest).toFixed(2));
};
