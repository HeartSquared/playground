export const sum = (...args: number[]): number =>
  args.reduce((total, value) => total += value, 0)
