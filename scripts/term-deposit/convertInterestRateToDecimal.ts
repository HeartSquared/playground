export const convertInterestRateToDecimal = (percentage: number): number =>
  Number((percentage / 100).toFixed(4));
