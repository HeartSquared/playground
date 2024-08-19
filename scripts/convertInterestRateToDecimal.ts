export const convertInterestRateToDecimal = (percentage: number): number => {
  // Round decimals to 4 decimal places
  const DECIMAL_OFFSET = 1000;
  return Math.round(percentage * DECIMAL_OFFSET) / (100 * DECIMAL_OFFSET);
};
