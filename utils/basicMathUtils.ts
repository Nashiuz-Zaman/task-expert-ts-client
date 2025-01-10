export const findPercentage = (number: number, total: number): number => {
  const percentage = (number / total) * 100;

  return Number.isInteger(percentage)
    ? percentage
    : parseFloat(percentage.toFixed(1));
};

export const findSum = (arr: number[]): number => {
  return arr.reduce((prev, cur) => prev + cur, 0);
};
